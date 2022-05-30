<template>
  <div class='contact-box'>
      <p class='text'>          
          CONTACT ME
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29342" width="200" height="200">
            <path
                d="M772.654545 607.418182c20.945455 0 39.563636-13.963636 44.218182-34.909091l27.927273-104.727273c6.981818-25.6-9.309091-51.2-32.581818-55.854545-25.6-6.981818-51.2 9.309091-55.854546 32.581818l-27.927272 104.727273c-6.981818 25.6 9.309091 51.2 32.581818 55.854545 4.654545 2.327273 6.981818 2.327273 11.636363 2.327273z m-195.490909 2.327273c20.945455 0 39.563636-13.963636 44.218182-34.909091l27.927273-104.727273c6.981818-25.6-9.309091-51.2-32.581818-55.854546-25.6-6.981818-51.2 9.309091-55.854546 32.581819l-27.927272 104.727272c-6.981818 25.6 9.309091 51.2 32.581818 55.854546 4.654545 2.327273 6.981818 2.327273 11.636363 2.327273zM118.690909 893.672727c-9.309091-6.981818-13.963636-18.618182-11.636364-27.927272 2.327273-11.636364 11.636364-20.945455 20.945455-23.272728 48.872727-11.636364 65.163636-16.290909 81.454545-30.254545-74.472727-53.527273-162.909091-165.236364-162.90909-300.218182C46.545455 260.654545 260.654545 46.545455 516.654545 46.545455 770.327273 46.545455 977.454545 253.672727 977.454545 509.672727c0 253.672727-169.890909 435.2-430.545454 463.127273-25.6 2.327273-48.872727 4.654545-74.472727 4.654545-141.963636 0-286.254545-39.563636-353.745455-83.781818z"
            ></path>
            </svg>
          </p>
      <QRcode/>
      <p class='mail'>nayutabit@qq.com</p>
  </div>
</template>

<script>
import {inject} from 'vue'
import QRcode from './QRcode.vue'
export default {
name:'ContactInfo',
components:{
    QRcode
},
setup() {
    const topicColor=inject('topicColor')
    return {
        topicColor
    }
}
}
</script>

<style lang='less' scoped>
.contact-box{
    width: 100%;
    height: 60%;
    display:flex ;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .text{
        color: #263366;
        font: 700 24px/1 "sofia-pro", sans-serif;
        letter-spacing: 0.1em;
        .icon{
            fill:#263366;
            margin:15px auto;
            display: block;
            width: 25px;
            height: 25px;
            animation:tour 4s linear infinite;
        }
    }
    .mail{
        color: #fff;
        font: 200 32px/1 "sofia-pro", sans-serif;
    }
}

@keyframes tour {
    0%,100%{
        transform: translateX(-30px);
    }
    50.9%{
        transform: translateX(30px);
    }
    51%{
        transform: translateX(30px) rotateY(180deg);
    }
    99.9%{
        transform: translateX(-30px) rotateY(180deg);
    }
}
@media (max-width: 1200px){
    .contact-box{
        .text{
            font-size: 16px;
            .icon{
                width: 20px;
                height: 20px;
            }
        }
        .mail{
            font-size: 24px;
        }
    }
}
</style>