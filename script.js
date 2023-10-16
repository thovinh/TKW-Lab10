function validateForm() {
    var email = document.commentForm.email.value;
    var rating = document.commentForm.rate.value;
    var comment = document.commentForm.com.value;
    var errors = [];

    var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (!emailRegex.test(email)) {
        errors.push("Email không có định dạng hợn lệ.");
    }

    if (isNaN(rating)) {
        errors.push("Rating phải là một số.");
    }

    if (email === "" || rating === "" || comment === "") {
        errors.push("Phải điền đầy đủ thông tin.");
    }

    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }

    return true;
}

function reportErrors(errors) {
    var errorMessage = "Vui lòng chỉnh sửa lại các lỗi sau:\n";
    for (var i = 0; i < errors.length; i++) {
        errorMessage += errors[i] + "\n";
    }
    alert(errorMessage);
}