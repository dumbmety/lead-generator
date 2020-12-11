import mediumZoom from 'medium-zoom';
import axios from 'axios';

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
    const duration = moment('2021-03-01 17:00:00') - moment();
    const d = moment.duration(duration);
    document.querySelector(
        '#countdown'
    ).innerHTML = `${d.days()} days and ${d.hours()} : ${d.minutes()} : ${d.seconds()}`;
}, 1000);
