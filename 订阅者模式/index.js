class Even {
    constructor() {
        this.events = {
            //eventName:[函数1，函数2，函数3]
        }
    }
    //   eventName 订阅事件的名称 callback 回调函数
    //  添加订阅模式
    on(eventName, callback) {
        //可以订阅多个 所以回调函数以数组的形式保存 
        //根据判断eventName是否已经订阅 如果没有添加eventName对应的回调函数数组
        //如果存在 在eventName对应的回调函数数组内push当前添加的回调函数
        if (!this.events[eventName]) {
            this.events[eventName] = [callback]
        } else {
            this.events[eventName].push(callback)
        }
    }


    // 执行订阅模式
    //eventName 执行的订阅事件名称  ...arg  ES6新增  表示 除了第一个参数外剩余的所有参数
    emit(eventName, ...arg) {
        //找到要执行的订阅事件 因为回调函数有多个 所以循环调用
        this.events[eventName].forEach(item => {
            item(...arg)
        })

    }
}

// export default Even()