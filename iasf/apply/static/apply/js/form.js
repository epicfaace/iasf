/* Parses the schemas for the json fields from json,
 * then renders the appropriate input text boxes.
 */
function parseSchemas() {
    try {
        var schemas = JSON.parse(document.getElementById("JSONListFieldSchemas").innerHTML.trim());
        for (var inputName in schemas) {
            $("form.applicationForm").find("textarea[name='"+inputName+"']").each(function() {
                var $textarea = $(this).hide().addClass("JSONFieldValue");
                var properties = schemas[inputName].items.properties;
                var tableHeadRow = "<tr>";
                var tableBodyRow = "<tr>";
                for (var property in properties) {
                    tableHeadRow += "<th>" + property + "</th>";
                    var inputType = getInputTypeFromSchema(properties[property].type);
                    tableBodyRow += "<td><input type='" + inputType + "' class='form-control form-control-sm' name='"+ property +"'></td>";
                }
                tableBodyRow += '<td><button type="button" class="btn btn-sm btn-danger deleteRowButton" aria-label="Left Align"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button></td>';
                tableHeadRow += "</tr>";
                tableBodyRow += "</tr>";
                addRowButton = '<button type="button" class="btn btn-sm btn-default addRowButton" aria-label="Left Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add another</button>';
                var $table = $("<table class=JSONFieldTable data-name='"+inputName+"'>" + tableHeadRow + "</table>");
                $table.insertAfter($textarea);
                $addRowButton = $(addRowButton);
                $addRowButton.insertAfter($table).click(function() {
                    addNewRow(tableBodyRow, $table);
                });

                // Loads current data into the table.
                try {
                    var currentData = JSON.parse($textarea.val());
                    if (!currentData) throw "no data";
                    var $tableHeadRow = $table.find("tr").first();
                    for (var i in currentData) {
                        $addRowButton.click();
                        var $finalRow = $table.find("tr").last();
                        for (var key in currentData[i]) {
                            var value = currentData[i][key];
                            $finalRow.find("input[name='" + key + "']").val(value);
                        }
                    }
                }
                catch (e) {
                    // No data should be loaded, so just add an empty row for now.
                    $addRowButton.click();
                }
            }); // end of each
        }
    }
    catch (e) {
        console.error(e);
        alert("An error occurred loading the form. Please contact us about the issue and/or try again later.");
    }
}
/* Gets input type; i.e., "text" for type "string" in schema,
 * "number" for type "integer".
 */
function getInputTypeFromSchema(inputType) {
    console.log(inputType);
    switch (inputType) {
        case "integer":
            return "number";
        case "string":
            return "text";
    }
    return "text";
}
function addNewRow(tableBodyRow, $table) {
    // Event handler for clicking on the "Add New" button.
    // Also attaches delete row event handler to "delete row" button.
    var $row = $(tableBodyRow);
    $row.appendTo($table);
    $row.find(".deleteRowButton").click(function() {
        $(this).closest("tr").remove();
    });
}
/* Creates an array of objects from the json entry fields,
 * then serializes it and sets the value of the associated textarea to this string.
 */
function serializeJSONFields() {
    $("form.applicationForm").find("textarea.JSONFieldValue").each(function() {
        var $textarea = $(this);
        var $table = $textarea.siblings("table.JSONFieldTable[data-name='" + $textarea.attr("name") + "']").first();
        var array = [];
        $table.find("tr").not(':first').each(function() {
            var entry = {};
            $(this).find("td").each(function() {
                var $input = $(this).find("input");
                if (!$input.length) {
                    // if it's a button td.
                    return;
                }
                var $inputVal = $input.val();
                // handle number-inputs:
                if ($input.attr('type') == 'number' && !isNaN($inputVal)) {
                    $inputVal = parseInt($inputVal);
                }
                entry[$input.attr("name")] = $inputVal;
            });
            array.push(entry);
        });
        $textarea.val(JSON.stringify(array));
    });
}

$(function() {
    parseSchemas();

    // when button save clicked, submit the form.
    $(".btnSave").click(function() {
        $form = $("form.applicationForm");
        serializeJSONFields();
        console.log($("form.applicationForm").find("textarea.JSONFieldValue").val());
        $form.submit();
    });

    // when page link clicked, first submit the current form.
    $("a.pageLink, a").click(function(e) {
        $(".overlay").show();
        e.preventDefault();
        var url = $(this).attr("href");
        var $form = $(".applicationForm");
        $.post("", $form.serialize()).success(function() {
            window.location.href = url;
        }).fail(function() {
            alert("There was an error submitting the form. Please fix the errors and try again.");
            $(".overlay").hide();
        });
    });
});