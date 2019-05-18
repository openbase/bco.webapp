Vue.component('device-menu',{

components: {
    ProductComponent, ReviewComponent
},

props: {
    message: String,
    product: Object,
    email: {
        type: String,
        required: true,
        default: "none"
        validator: function (value) {
        }
    }
},

data: function() {
    return {
        firstName: 'Vue',
        lastName: 'Mastery'
    }
},

computed: {
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    }
},

watch: {
    firstName: function (value, oldValue) { ... }
},

methods: { ... },


template: 'Test2'

})