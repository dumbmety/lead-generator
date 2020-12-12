import mediumZoom from 'medium-zoom';
import countdown from 'countdown';

const closeMessageButton = document.querySelector('.message .close');
const socialButtons = document.querySelectorAll('a.ui.button.basic');

// Image Zoom Effect
mediumZoom('.image-zoom', {
    margin: 150,
    scrollOffset: 60
});

// Close Message
if (closeMessageButton) {
    closeMessageButton.addEventListener(
        'click',
        () => (window.location.href = '/')
    );
}

// Count Buttons
socialButtons.forEach(btn => {
    btn.onclick = () => {
        $.ajax({
            method: 'POST',
            url: '/api/v1/counts',
            data: { name: btn.dataset.name }
        }).done(function (msg) {
            $('a[data-name="' + msg.name + '"] .badge').html(msg.count);
        });
    };
});

// CountDown
setInterval(() => {
    const element = document.querySelector('#countdown');
    const deadline = new Date('2021-03-01 17:00:00');

    element.innerHTML = countdown(deadline).toString();
}, 1000);
