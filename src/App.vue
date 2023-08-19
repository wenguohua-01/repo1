<template>
  <div class="container">
    <van-nav-bar
      title="e租宝案"
      left-arrow
    />

    <div class="list_box">
      <div class="list">
        <div class="list-head">开庭前准备 5</div>
        <div class="list_item">
          <div class="list_item-head">
            <van-checkbox v-model="radio" shape="square">核对证据原件并存档</van-checkbox>
            <div class="list_item-head_name">
              <div class="list_item-head_name-tag"></div>
              <div class="list_item-head_name-text">e租宝案</div>
            </div>
          </div>
          <div class="list_item-info">
            <img class="list_item-info_img" style="display: block;" src="https://cs-res.codehub.cn/workspace/assets/icons/emberjs.svg" lazy-load alt="" />
            <div class="list_item-info_tag list_item-info_tag--gray">03-28 截止</div>
            <img class="list_item-info_clock" style="display: block;" src="https://cs-res.codehub.cn/vscode/serverless.svg" lazy-load alt="" />
          </div>
        </div>

        <div class="list_item list_item--blue">
          <div class="list_item-head">
            <van-checkbox v-model="radio1" shape="square">调取并查阅案卷</van-checkbox>
            <div class="list_item-head_name">
              <div class="list_item-head_name-tag"></div>
              <div class="list_item-head_name-text">e租宝案</div>
            </div>
          </div>
          <div class="list_item-info">
            <img class="list_item-info_img" style="display: block;" src="https://cs-res.codehub.cn/workspace/assets/icons/emberjs.svg" lazy-load alt="" />
            <div class="list_item-info_tag list_item-info_tag--blue">下周一 截止</div>
            <img class="list_item-info_clock" style="display: block;" src="https://cs-res.codehub.cn/vscode/serverless.svg" lazy-load alt="" />
          </div>
        </div>

        <div class="list_item list_item--orange">
          <div class="list_item-head">
            <van-checkbox v-model="radio2" shape="square">领取传票并通知委托人</van-checkbox>
            <div class="list_item-head_name">
              <div class="list_item-head_name-tag"></div>
              <div class="list_item-head_name-text">e租宝案</div>
            </div>
          </div>
          <div class="list_item-info">
            <img class="list_item-info_img" style="display: block;" src="https://cs-res.codehub.cn/workspace/assets/icons/emberjs.svg" lazy-load alt="" />
            <div class="list_item-info_tag list_item-info_tag--orange">明天 17:00 截止</div>
            <img class="list_item-info_clock" style="display: block;" src="https://cs-res.codehub.cn/vscode/serverless.svg" lazy-load alt="" />
          </div>
        </div>

        <div class="list_item list_item--red">
          <div class="list_item-head">
            <van-checkbox v-model="radio3" shape="square">写委托书</van-checkbox>
            <div class="list_item-head_name">
              <div class="list_item-head_name-tag"></div>
              <div class="list_item-head_name-text">e租宝案</div>
            </div>
          </div>
          <div class="list_item-info">
            <img class="list_item-info_img" style="display: block;" src="https://cs-res.codehub.cn/workspace/assets/icons/emberjs.svg" lazy-load alt="" />
            <div class="list_item-info_tag list_item-info_tag--red">2019-2-12 截止</div>
            <img class="list_item-info_clock" style="display: block;" src="https://cs-res.codehub.cn/vscode/serverless.svg" lazy-load alt="" />
          </div>
        </div>
      </div>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="comment-o">名片夹</van-tabbar-item>
      <van-tabbar-item icon="shop-o">官网</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
      radio: false,
      radio1: false,
      radio2: false,
      radio3: false,
    };
  },
};
</script>

<style lang="less">
html,
body {
  // font-family: PingFangSC-Medium, PingFang SC, Arial, 'Microsoft Yahei', sans-serif;
  font-family: Arial, 'Microsoft Yahei', sans-serif;
  font-size: 0.14rem;
  // line-height: 0.24rem;
  color: #333;
  background: #f9f9f9;
  // iPhone 横屏默认会放大文字，设置text-size-adjust会解决这个问题
  -webkit-text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
}

* {
  outline-style: none !important;
}
</style>

<style lang="less" scoped>
.container {
  position: relative;
  min-height: 100vh;
  padding-bottom: 0.5rem;
  background: #fff;
}

.list_box {
  padding: 0.2rem 0.1rem;
  box-sizing: border-box;
  .list {
    padding: 0.1rem 0.1rem 0.3rem;
    box-sizing: border-box;
    background: #f4f4f4;
    width: 100%;
    border-radius: 3px;
    &-head {
      padding: 16px 15px 12px 0;
      box-sizing: border-box;
      font-size: 0.16rem;
    }
  }
}

.list_item {
  background: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 0.1rem;
  &--gray {
    background: #cccccc;
  }
  &--blue {
    border-left: 2px solid #75A8F7;
  }
  &--orange {
    border-left: 2px solid #E8A743;
  }
  &--red {
    border-left: 2px solid #E8311F;
  }
  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_name {
      display: flex;
      align-items: center;
      &-tag {
        width: 6px;
        height: 6px;
        background: #5F8DD8;
        border-radius: 50%;
        margin-right: 0.05rem;
      }
      &-text {
        font-size: 0.12rem;
        color: #989A9C;
      }
    }
  }

  &-info {
    padding-top: 8px;
    padding-left: 25px;
    display: flex;
    align-items: center;
    &_img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    &_tag {
      padding: 0 5px;
      box-sizing: border-box;
      height: 18px;
      line-height: 18px;
      background: #989A9C;
      border-radius: 3px;
      margin-right: 10px;
      color: #fff;
      font-size: 0.1rem;
      &--gray {
        background: #cccccc;
      }
      &--blue {
        background: #75A8F7;
      }
      &--orange {
        background: #E8A743;
      }
      &--red {
        background: #E8311F;
      }
    }
    &_clock {
      width: 10px;
      height: 10px;
    }
  }
}
</style>