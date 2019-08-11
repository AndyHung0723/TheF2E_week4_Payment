// 訂單資訊側欄
document.querySelector('.order-info__block').addEventListener('click', (e) => {
    if(document.querySelector('.order-info').style.left == '0px') {
        document.querySelector('.order-info').style.left = '-130px';
    }else {
        document.querySelector('.order-info').style.left = '0';
    }
});

// 下一步
document.querySelector('.next').addEventListener('click', (e) => {
    var isSelect = false;
    document.querySelectorAll('.card-item').forEach((el, idx) => {
        if(el.classList.contains('active')) {
            isSelect = true;
        }
    });
    if(!isSelect) {
        alert('請選擇付款方式');
    }else {
        // 顯示區塊
        document.querySelector('.content-1').classList.add('d-none');
        document.querySelector('.content-1').classList.remove('d-block');
        document.querySelector('.content-2').classList.add('d-block');
        document.querySelector('.content-2').classList.remove('d-none');
        // 上方進度列調整為第二步
        document.querySelector('.step-2 div').classList.remove('gray-2');
        document.querySelector('.step-2 div').classList.add('green-2');
        document.querySelector('.step-1-progress .progress .progress-bar').classList.remove('w-50');
        document.querySelector('.step-1-progress .progress .progress-bar').classList.add('w-100');
        document.querySelector('.step-2-progress .progress .progress-bar').classList.remove('w-0');
        document.querySelector('.step-2-progress .progress .progress-bar').classList.add('w-50');
        addValidate();
    }
});

// 選擇信用卡
document.querySelectorAll('.card-item').forEach((el, idx) => {
    var parentIdx = idx;
    el.addEventListener('click', (e) => {
        if(el.classList.contains('active')) {
            el.classList.remove('active');
        }else {
            el.classList.add('active');
        }
        document.querySelectorAll('.card-item').forEach((el, idx) => {
            if(parentIdx != idx) {
                el.classList.remove('active');
            }
        });
    });
});

// 上一步
document.querySelector('.previous').addEventListener('click', (e) => {
    // 顯示區塊
    document.querySelector('.content-2').classList.remove('d-block');
    document.querySelector('.content-2').classList.add('d-none');
    document.querySelector('.content-1').classList.remove('d-none');
    document.querySelector('.content-1').classList.add('d-block');
    // 上方進度列調整為第一步
    document.querySelector('.step-2 div').classList.remove('green-2');
    document.querySelector('.step-2 div').classList.add('gray-2');
    document.querySelector('.step-1-progress .progress .progress-bar').classList.remove('w-100');
    document.querySelector('.step-1-progress .progress .progress-bar').classList.add('w-50');
    document.querySelector('.step-2-progress .progress .progress-bar').classList.remove('w-50');
});

// 確認付款
document.querySelector('.submit').addEventListener('click', (e) => {

});

function addValidate() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }else if (form.checkValidity() == true) {
                // 驗證成功
                // 顯示區塊
                document.querySelector('.content-2').classList.add('d-none');
                document.querySelector('.content-2').classList.remove('d-block');
                document.querySelector('.content-3').classList.add('d-block');
                document.querySelector('.content-3').classList.remove('d-none');
                // 上方進度列調整為第三步
                document.querySelector('.step-3 div').classList.remove('gray-3');
                document.querySelector('.step-3 div').classList.add('green-2');
                document.querySelector('.step-2-progress .progress .progress-bar').classList.remove('w-50');
                document.querySelector('.step-2-progress .progress .progress-bar').classList.add('w-100');
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}
