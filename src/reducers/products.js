
var initialState = [
    {
        id : 1,
        name : 'Canon EOS-1D X Mark III',
        image : 'https://us.v-cdn.net/6029383/uploads/editor/31/ufk9w6avivqw.jpg',
        description : 'Sản phẩm do apple sản suất',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Sony Alpha A7 Mark II',
        image : 'https://kyma.vn/StoreData/images/Product/sony-alpha-a7-ii-body-ilce7m2.jpg',
        description : 'Sản phẩm do samsung sản suất',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Nikon D5600 Kit AF-P 18-55 VR',
        image : 'https://binhminhdigital.com/storedata/images/product/nikon-d5600(2).jpg',
        description : 'Sản phẩm do china sản suất',
        price : 450,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;