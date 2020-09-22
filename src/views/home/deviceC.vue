<template>
    <div class="DeviceMain">
      <div class="tongjiInfo1">
        <section>
          <table>
            <tr>
              <th>电源概况</th>
              <th>参数结果</th>
            </tr>
            <tr class="DeviceTR" v-for="data in powerInfoD" :key="data.id">
              <td>{{data.name}}</td>
              <td>{{data.value}}</td>
            </tr>
          </table>
        </section>
        <section>
          <table>
            <tr class="tongjiInfo3">
              <th>状态统计</th>
            </tr>
            <tr class="tongjiInfo4">
              <td class="tongjiInfo5">
                <section><div class="divIcon">32</div></section>
                <section>
                  <table>
                    <tr class="IconTR">
                      <th>正常</th>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                  </table>
                </section>
              </td>
              <td class="tongjiInfo5">
                <section><div class="divIcon divIcon1">6</div></section>
                <section>
                  <table>
                    <tr class="IconTR">
                      <th>预警</th>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="yujing11"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="yujing11"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="yujing11"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="yujing11"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                  </table>
                </section>
              </td>
              <td class="tongjiInfo5">
                <section><div class="divIcon divIcon2">3</div></section>
                <section>
                  <table>
                    <tr class="IconTR">
                      <th>故障</th>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="guzhang1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="guzhang1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="guzhang1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="guzhang1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                  </table>
                </section>
              </td>
              <td class="tongjiInfo5">
                <section><div class="divIcon divIcon3">0</div></section>
                <section>
                  <table>
                    <tr class="IconTR">
                      <th>维护</th>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="weihu1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="weihu1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                    <tr class="IconTR">
                      <td>
                        <div id="weihu1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                      <td>
                        <div id="weihu1"></div>
                        <div>设备情况</div>
                        <div></div>
                      </td>
                    </tr>
                  </table>
                </section>
              </td>
            </tr>
          </table>
        </section>
      </div>
      <div class="tongjiInfo2">
        <div class="deviceIn" v-for="datas in deviceInfo1" :key="datas.id" @click="Jump1(datas.name)" :style="datas.color">
          <div class="deviceIconImg"><img :src=" datas.imgurl " alt="图片"></div>
          <div>
            <div>{{datas.name}}</div>
            <div>{{datas.states}}</div>
            <div>线速度:{{datas.speed}}</div>
            <div>络筒时间: {{datas.times1}}</div>
            <div><span>剩余时间:</span> {{datas.times2}}</div>
          </div>
        </div>
        <div class="deviceIn" v-for="datas in deviceInfo2" :key="datas.id" @click="Jump2(datas.name)" :style="datas.color">
          <div class="deviceIconImg"><img :src=" datas.imgurl " alt="图片"></div>
          <div>
            <div>{{datas.name}}</div>
            <div>{{datas.states}}</div>
            <div>线速度:{{datas.speed}}</div>
            <div>络筒时间: {{datas.times1}}</div>
            <div><span>剩余时间:</span> {{datas.times2}}</div>
          </div>
        </div>
        <div class="deviceIn" v-for="datas in deviceInfo3" :key="datas.id" @click="Jump3(datas.name)" :style="datas.color">
          <div class="deviceIconImg"><img :src=" datas.imgurl " alt="图片"></div>
          <div>
            <div>{{datas.name}}</div>
            <div>{{datas.states}}</div>
            <div>线速度:{{datas.speed}}</div>
            <div>络筒时间: {{datas.times1}}</div>
            <div><span>剩余时间:</span> {{datas.times2}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  /* eslint-disable */
  name: 'deviceC',
  data () {
    return {
      powerInfoD: [
        { name: '参数1', value: '----' },
        { name: '参数2', value: '----' },
        { name: '参数3', value: '----' },
        { name: '参数4', value: '----' },
        { name: '参数5', value: '----' },
        { name: '参数6', value: '----' },
        { name: '参数7', value: '----' },
        { name: '参数8', value: '----' },
        { name: '参数9', value: '----' },
        { name: '参数10', value: '----' }
      ],
      deviceInfo1: [{ name: 'L8#1', states: '正常运行', speed: 3300, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') }],
      deviceInfo2: [{ name: 'L8#2', states: '正常运行', speed: 3300, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') }],
      deviceInfo3: [{ name: 'L8#3', states: '正常运行', speed: 3300, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L8#4', states: '正常运行', speed: 3300, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L8#5', states: '正常运行', speed: 3300, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L8#6', states: '正常运行', speed: 3000, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L8#7', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L8#8', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L8#9', states: '需要注意', speed: 3200, times1: '17:58', times2: '22min', color: 'border:yellow 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#2', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#3', states: '故障', speed: 3200, times1: '17:58', times2: '22min', color: 'border:red 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#4', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#5', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#6', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#7', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#8', states: '需要注意', speed: 3200, times1: '17:58', times2: '22min', color: 'border:yellow 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L7#9', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#1', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#2', states: '故障', speed: 3200, times1: '17:58', times2: '22min', color: 'border:red 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#3', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#4', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#5', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#6', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#7', states: '需要注意', speed: 3200, times1: '17:58', times2: '22min', color: 'border:yellow 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#8', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L6#9', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L5#1', states: '故障', speed: 3200, times1: '17:58', times2: '22min', color: 'border:red 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L5#2', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L5#3', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L5#4', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L5#5', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L5#6', states: '需要注意', speed: 3200, times1: '17:58', times2: '22min', color: 'border:yellow 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L5#7', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') },
                    { name: 'L5#8', states: '正常运行', speed: 3200, times1: '17:58', times2: '22min', color: 'border:green 1px solid', imgurl: require('../../assets/img/device.jpg') }]
    }
  },
  methods: {
    Jump1 (name) {
      this.$router.push('monitor')
    },
    Jump2 (name) {
      this.$router.push('2monitor1')
    },
    Jump3 (name) {
      this.$router.push('3monitor1')
    }
  },
  mounted () {

  }
}
</script>
<style  scoped >
  @import url("../../assets/Css/common/tables.css");
  @import url("../../assets/Css/common/divIcon.css");
  @import url('../../assets/Css/home/deviceC.css');
</style>
