<template>
  <div class="container">
    <div id="china" style="width: 100vh;height: 600px"></div>

  </div>
</template>

<script setup lang="ts" name=Test5>
import {onMounted} from "vue";
import * as echarts from 'echarts';
import '../assets/china'

onMounted(() => {
  const dom = echarts.init(document.querySelector('#china') as HTMLElement)
  dom.setOption({
    title: {
      top: 10,
      text: '平面图地图3D效果，整体地图渐变色，并且两层同步拖拽',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    backgroundColor: 'rgba(0, 10, 52, 1)',
    geo: {
      map: 'china',
      aspectScale: 0.75,
      layoutCenter: ["50%", "51.5%"], //地图位置
      layoutSize: '118%',
      roam: true,
      itemStyle: {
        borderColor: 'rgba(147, 235, 248, 1)',
        borderWidth: 0.5,
        color: {
          type: 'linear-gradient',
          x: 0,
          y: 1500,
          x2: 2500,
          y2: 0,
          colorStops: [{
            offset: 0,
            color: '#009DA1' // 0% 处的颜色
          }, {
            offset: 1,
            color: '#005B9E' // 50% 处的颜色
          }],
          global: true // 缺省为 false
        },
        opacity: 0.5,
      },
      emphasis: {
        areaColor: '#2a333d'
      },
      regions: [{
        name: '南海诸岛',
        itemStyle: {
          areaColor: 'rgba(0, 10, 52, 1)',
          borderColor: 'rgba(0, 10, 52, 1)'
        },
        emphasis: {
          areaColor: 'rgba(0, 10, 52, 1)',
          borderColor: 'rgba(0, 10, 52, 1)'
        }
      }],
      z: 2
    },
    series: [{
      type: 'map',
      map: 'china',
      tooltip: {
        show: false
      },
      label: {
        show: true,
        color: '#FFFFFF',
        fontSize: 16
      },
      aspectScale: 0.75,
      layoutCenter: ["50%", "50%"], //地图位置
      layoutSize: '118%',
      roam: true,
      itemStyle: {
        borderColor: 'rgba(147, 235, 248, 0.6)',
        borderWidth: 0.8,
        areaColor: {
          type: 'linear-gradient',
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [{
            offset: 0,
            color: '#009DA1' // 0% 处的颜色
          }, {
            offset: 1,
            color: '#005B9E' // 50% 处的颜色
          }],
          global: true // 缺省为 false
        }
      },
      emphasis: {
        areaColor: 'rgba(147, 235, 248, 0)'
      },
      zlevel: 1
    }]
  })
})
</script>

<style scoped lang="scss">
.container {
  height: 600px;
  width: 100%;
}
</style>