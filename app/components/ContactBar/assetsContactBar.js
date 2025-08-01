import zalo from './zalo-icon.png';

export const contactList = [
    {
        type: 'phone',
        href: 'tel:0379499255',
        title: 'Call me now',
        iconClass: 'fa-solid fa-phone'
    },
    {
        type: 'zalo',
        href: 'https://zalo.me/0379499255',
        title: 'Send message with Zalo',
        image: zalo
    },
    {
        type: 'messenger',
        href: 'https://m.me/luongxmen1402',
        title: 'Send message with Zalo',
        iconClass: 'fa-brands fa-facebook-messenger'
    },
    {
        type: 'maps',
        href: 'https://maps.app.goo.gl/v8B4VviG7yQ7g42C7',
        title: 'Visit my location',
        iconClass: 'fa-solid fa-map-location-dot',
        // Gán class riêng cho nút maps nếu cần, hoặc nó sẽ dùng style mặc định
    }
];