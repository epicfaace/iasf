$(function() {
    // when button save clicked, submit the form.
    $(".btnSave").click(function() {
        $(this).closest("form").submit();
    });

    // when page link clicked, first submit the current form.
    $("a.pageLink").click(function(e) {
        e.preventDefault();
        var url = $(this).attr("href");
        var $form = $(".applicationForm");
        $.post("", $form.serialize()).success(function() {
            window.location.href = url;
        }).fail(function() {
            alert("There was an error submitting the form. Please fix the errors and try again.");
        });
    });
});