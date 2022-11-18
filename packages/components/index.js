// 所有组件的入口，我们可以在这里进行扩展一些组件，并进行整合
import Button from './button/index.vue'
import Icon from './icon/index.vue'
import Radio from './radio/index.vue'
import RadioGroup from './radio-group/index.vue'
import CheckBox from './checkbox/index.vue'
import CheckBoxGroup from './checkbox-group/index.vue'
import Input from './input/index.vue'
import InputNumber from './input-number/index.vue'
import Form from './form/index.vue'
import FormItem from './form-item/index.vue'
import Uploader from './uploader/index.vue'
import Toast from './toast/index.vue'
import Message from './message/index.vue'
import Modal from './modal/index.vue'
import MessageBox from './message-box/index.vue'

// 这里提供一个方法，待会用的时候就use这个方法,因为use是vue的方法，所以这个方法要把Vue传进来
const install = (Vue)=>{
	// 在install方法里注册全局组件
    // Vue.component('pd-button',Button) //这种方式有个问题，组件名字pd-button写死了
    Vue.component(Button.name,Button) // 我们可以把名字在组件文件里用name定义好,这样就取的是组件文件的名字
    Vue.component(Icon.name,Icon)
    Vue.component(Radio.name,Radio)
    Vue.component(RadioGroup.name,RadioGroup)
    Vue.component(CheckBox.name,CheckBox)
    Vue.component(CheckBoxGroup.name,CheckBoxGroup)
    Vue.component(Input.name,Input)
    Vue.component(InputNumber.name,InputNumber)
    Vue.component(Form.name,Form)
    Vue.component(FormItem.name,FormItem)
    Vue.component(Uploader.name,Uploader)
    Vue.component(Toast.name,Toast)
    Vue.component(Message.name,Message)
    Vue.component(Modal.name,Modal)
    Vue.component(MessageBox.name,MessageBox)
}

//这样我们有很多组件就可以在install方法里先注册一下，到时候别人要用的时候再导出一个对象，整个文件作为一个入口，后续再复杂的封装，
//并且有可能组件会通过script标签的方式引入<script src='proudUI'>,这样它就不会去调用install方法，这种情况下，如果它是通过标签引入的话，我们就要让它自动的去调用install方法，这里需要判断window下是否有Vue实例
if(typeof window.Vue !== 'undefined'){ // 这个判断条件这样写是因为Vue只有用script标签的方式导入才会挂载到window上，import的方式导入是挂载不到window上的，而是在当前的模块内
	// 当前全局window下有Vue实例的话，直接调用install把Vue传进去
    install(Vue) // 全局直接通过script引用的方式会默认调用install方法
}
export default {
	install 
}