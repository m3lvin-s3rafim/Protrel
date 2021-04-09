// Dispatch all Sweet Alert Component
window.addEventListener("swal", function (e) {
    Swal.fire(e.detail);
});

window.addEventListener("openDeleteCompanyModal", (event) => {
    $("#deleteCompanyModal").modal("show");
});

window.addEventListener("closeDeleteCompanyModal", (event) => {
    $("#deleteCompanyModal").modal("hide");
});

window.addEventListener("openUpdateCompanyModal", (event) => {
    $("#updateCompanyModal").modal("show");
});

window.addEventListener("closeUpdateCompanyModal", (event) => {
    $("#updateCompanyModal").modal("hide");
});

window.addEventListener("companyCreateCollapseHide", (event) => {
    $("#newCompanyCollapse").collapse("hide");
    $("#btnCreateCompanyCollapse").removeClass("d-none");
});

$(document).on("click", "#btnCreateCompanyCollapse", function () {
    $(this).addClass("d-none");
});

$(document).on("click", "#btnCancelCompanyCollapse", function () {
    $("#btnCreateCompanyCollapse").removeClass("d-none");
});

// ========================== Validation ===========================

// Fields Formatter
$(".f-money").mask("000000000000000.0", { reverse: true });
$(".f-phone-area").mask("(000) 00 000 0 000");
$(".f-phone").mask("00 000 0 000");
$(".f-nuit").mask("000 000 000");
