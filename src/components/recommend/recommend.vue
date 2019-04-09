<template>
  <div
    class="recommend"
    ref="recommend"
  >
    <Scroll
      ref="scroll"
      class="recommend-content"
    >
      <div>
        <div
          v-if="recommends.length"
          class="slider-wrapper"
          ref="sliderWrapper"
        >
          <slider>
            <div
              v-for="(item,index) in recommends"
              :key="index"
            >
              <a :href="item.linkUrl">
                <img
                  class="needsclick"
                  :src="item.picUrl"
                >
              </a>
            </div>
          </slider>
        </div>
        <!-- <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
          </ul>
        </div> -->
      </div>
    </Scroll>

    <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// 引入recommend页面获取数据的方法并且定义好方法在created里面调用获取并且渲染页面
// eslint-disable-next-line standard/object-curly-even-spacing
// eslint-disable-next-line no-unused-vars
import { getRemcommend, getDiscList } from 'api/recommend'
// eslint-disable-next-line no-unused-vars
import { ERR_OK } from 'api/config'
// 引入自己抽离的轮播图
// eslint-disable-next-line no-unused-vars
import slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
// eslint-disable-next-line no-unused-vars
// import loading from 'base/loading/loading'
export default {
  data() {
    return {
      recommends: [],
      discList: [],
      num: 1
    }
  },
  created() {
    this._getRecommend()
    // this._getDiscList()
  },
  components: {
    slider,
    Scroll
  },
  methods: {
    _getRecommend() {
      getRemcommend().then(res => {
        // eslint-disable-next-line eqeqeq
        if (res.code == ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
    // ,
    // _getDiscList() {
    //   getDiscList().then(res => {
    //     // eslint-disable-next-line eqeqeq
    //     if (res.code == ERR_OK) {
    //       this.discList = res.data.slider
    //     }
    //   })
    // }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>