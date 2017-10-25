$(function() {
    $(".btnSave").click(function() {
        $(this).closest("form").submit();
    });
    $("a.pageLink").click(function(e) {
        e.preventDefault();
        var url = $(this).attr("href");
        var $form = $(".applicationForm");
        $.post("", $form.serialize()).success(function() {
            window.location.href = url;
        }).fail(function() {
            window.location.href = url;
        });
    });
});