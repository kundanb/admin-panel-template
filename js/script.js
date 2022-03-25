$(document).on('click', '.js-toggle-pass', function () {
    var $this = $(this);
    var $target = $($this.data('js-target'));
    var $icon = $this.find('i');

    if ($icon.hasClass('fa-eye-slash')) {
        $icon.removeClass('fa-eye-slash').addClass('fa-eye');
        $target.attr('type', 'text');
    } else {
        $icon.removeClass('fa-eye').addClass('fa-eye-slash');
        $target.attr('type', 'password');
    }
});

$(document).on('click', '.js-toggle-sb-nav-dd', function () {
    $(this).toggleClass('active');
    $(this).closest('.nav-dd-label').next().collapse('toggle');
});

$(function () {
    var chart1 = new Chart($('#chart1'), {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    data: [0, 10, 5, 2, 20, 30, 45],
                },
            ],
        },
    });
});
