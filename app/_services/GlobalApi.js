const getCategory = () => {
    return [
        {
            bgcolor: '#fcf6ff',
            icon: "/mop.png",
            id: "1",
            name: 'Cleaning'
        },
        {
            bgcolor: '#fcf6ff',
            icon: "/cargo-truck.png",
            id: "2",
            name: 'Shifting'
        },
        {
            bgcolor: '#fcf6ff',
            icon: "/paintbrush.png",
            id: "3",
            name: 'Painting'
        },
        {
            bgcolor: '#fcf6ff',
            icon: "/support.png",
            id: "4",
            name: 'Laundry'
        },
        {
            bgcolor: '#fcf6ff',
            icon: "/paintbrush.png",
            id: "5",
            name: 'Plumbing'
        },
        {
            bgcolor: '#fcf6ff',
            icon: "/support.png",
            id: "6",
            name: 'Electric'
        }
    ]
}

const getAllBusinessList = () => {
    return [
        {
            id: '1',
            images: [{ url: '/person1.jpg' }],
            name: 'Bathroom Cleaning',
            contactPerson: 'Henny Wilson',
            address: '525 N Tryon Street, NC',
            category: { name: 'Cleaning' },
            email: 'kuba.jazdzyk@zaklepuje.to',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
        },
        {
            id: '2',
            images: [{ url: '/person2.jpg' }],
            name: 'House Repairing',
            contactPerson: 'Ronaldo Epric',
            address: '412 Tryon Street New York',
            category: { name: 'Repair' },
            email: 'kuba.jazdzyk@zaklepuje.to',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
        },
        {
            id: '3',
            images: [{ url: '/person3.jpg' }],
            name: 'House Cleaning',
            contactPerson: 'Jenny Wilson',
            address: '255 Park Avenue, New  York',
            category: { name: 'Cleaning' },
            email: 'kuba.jazdzyk@zaklepuje.to',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
        }
    ]
}

const getBusinessByCategory = (category) => {
    return [
        {
            id: '1',
            images: [{ url: '/person1.jpg' }],
            name: 'Bathroom Cleaning',
            contactPerson: 'Henny Wilson',
            address: '525 N Tryon Street, NC',
            category: { name: 'Cleaning' },
            email: 'kuba.jazdzyk@zaklepuje.to',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
        },
        {
            id: '2',
            images: [{ url: '/person2.jpg' }],
            name: 'House Repairing',
            contactPerson: 'Ronaldo Epric',
            address: '412 Tryon Street New York',
            category: { name: 'Repair' },
            email: 'kuba.jazdzyk@zaklepuje.to',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
        },
        {
            id: '3',
            images: [{ url: '/person3.jpg' }],
            name: 'House Cleaning',
            contactPerson: 'Jenny Wilson',
            address: '255 Park Avenue, New  York',
            category: { name: 'Cleaning' },
            email: 'kuba.jazdzyk@zaklepuje.to',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
        }
    ]
}

const getBusinessById = (id) => {
    const response = {
        id: '3',
        images: [{ url: '/person3.jpg' }],
        name: 'House Cleaning',
        contactPerson: 'Jenny Wilson',
        address: '255 Park Avenue, New  York',
        category: { name: 'Cleaning' },
        email: 'kuba.jazdzyk@zaklepuje.to',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
    }
    return response
}

const createNewBooking = () => {
    return []
}

const getUserBookingHistory = () => {
    return [
        {
            id: "1",
            businessList: {
                id: '1',
                images: [{ url: '/person1.jpg' }],
                name: 'Bathroom Cleaning',
                contactPerson: 'Henny Wilson',
                address: '525 N Tryon Street, NC',
                category: { name: 'Cleaning' },
                email: 'kuba.jazdzyk@zaklepuje.to',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',

            },
            date: '2024-06-19',
            time: '13:00',
            email: 'kuba.jazdzyk@gmail.com'
        },
        {
            id: "2",
            businessList: {
                id: '3',
                images: [{ url: '/person3.jpg' }],
                name: 'House Cleaning',
                contactPerson: 'Jenny Wilson',
                address: '255 Park Avenue, New  York',
                category: { name: 'Cleaning' },
                email: 'kuba.jazdzyk@zaklepuje.to',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
            },
            date: '2024-06-25',
            time: '13:00',
            email: 'kuba.jazdzyk@gmail.com'
        },
        {
            id: "3",
            businessList: {
                id: '1',
                images: [{ url: '/person1.jpg' }],
                name: 'Bathroom Cleaning',
                contactPerson: 'Henny Wilson',
                address: '525 N Tryon Street, NC',
                category: { name: 'Cleaning' },
                email: 'kuba.jazdzyk@zaklepuje.to',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante sed lacus tempor sollicitudin. Nullam porttitor ex quis risus vestibulum mattis. Donec sit amet justo luctus, interdum ligula a, scelerisque magna. Pellentesque at elit in purus auctor auctor quis in neque. Maecenas non metus elit. Nam et enim id nisl molestie facilisis placerat ut eros. Duis bibendum turpis vel velit ornare blandit. Cras pulvinar mauris sed ullamcorper rhoncus. Morbi scelerisque leo nec diam pharetra aliquet. Morbi sit amet mi lorem. Ut ac aliquet neque, sit amet laoreet orci. Sed laoreet porttitor sapien quis lobortis. ',
            },
            date: '2024-06-21',
            time: '14:00',
            email: 'kuba.jazdzyk@gmail.com'
        }
    ]
}

const deleteBooking = () => {
    return []
}

export default {
    getCategory,
    getAllBusinessList,
    getBusinessByCategory,
    getBusinessById,
    createNewBooking,
    getUserBookingHistory,
    deleteBooking,
}