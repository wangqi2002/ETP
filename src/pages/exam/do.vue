<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
definePage({
  style: {
    navigationBarTitleText: 'do',
  },
})

const spinShow = ref(false)
const paperId = ref(null)
const form = reactive({})
const timer = ref(null)
const doTime = ref(0)
const remainTime = ref(0)
const remainTimeStr = ref('')
const modalShow = ref(false)
const result = ref(0)
const timeOutShow = ref(false)

function timeReduce() {
  console.log('timeReduce')
}
function returnRecord() {
  console.log('returnRecord')
}
function timeOut() {
  console.log('timeOut')
}
function formSubmit() {
  console.log('formSubmit')
}

onLoad(() => {
  console.log('测试 uni API 自动引入: onLoad')
})
</script>

<template>
  <view class="exam-page">
    <view class="view-wrap">
      <view class="exam-count-down">
        {{ remainTimeStr }}
      </view>
    </view>
    <view class="view-wrap-hidden" />

    <view>
      <view class="exam-name-title">
        <h1>{{ form.name }}</h1>
      </view>
      <form>
        <i-panel title="{{titleItem.name}}" wx:for="{{form.titleItems}}" wx:for-item="titleItem" wx:key="{{titleItem.name}}" i-class="exam-panel-title">
          <i-cell-group i-class="exam-cell">
            <i-cell wx:for="{{titleItem.questionItems}}" wx:key="{{titleItem.id}}" wx:for-item="questionItem">
              <view wx:if="{{questionItem.questionType === 1}}">
                <rich-text nodes="{{questionItem.itemOrder}}. {{questionItem.title}}" />
                <radio-group class="radio-group" name="{{questionItem.itemOrder}}_{{questionItem.id}}_{{questionItem.questionType}}">
                  <label class="radio exam-radio-item-label" wx:for="{{questionItem.items}}" wx:key="{{questionItem.prefix}}" wx:for-item="radioItem">
                    <radio color="#2d8cf0" value="{{radioItem.prefix}}" checked="{{radioItem.checked}}" class="exam-item-left" />
                    <rich-text nodes="{{radioItem.prefix}}. {{radioItem.content}}" class="exam-item-left" />
                  </label>
                </radio-group>
              </view>
              <view wx:elif="{{questionItem.questionType === 2}}">
                <rich-text nodes="{{questionItem.itemOrder}}. {{questionItem.title}}" class="exam-item-left" style="line-height:35px" />
                <checkbox-group class="exam-item-left" style="margin-left:10px" name="{{questionItem.itemOrder}}_{{questionItem.id}}_{{questionItem.questionType}}">
                  <label wx:for="{{questionItem.items}}" wx:key="{{questionItem.prefix}}" wx:for-item="radioItem" class="exam-radio-item-label">
                    <checkbox color="#2d8cf0" value="{{radioItem.prefix}}" checked="{{radioItem.checked}}" class="exam-item-left" />
                    <rich-text nodes="{{radioItem.prefix}}. {{radioItem.content}}" class="exam-item-left" />
                  </label>
                </checkbox-group>
              </view>
              <view wx:elif="{{questionItem.questionType === 3}}">
                <rich-text nodes="{{questionItem.itemOrder}}. {{questionItem.title}}" class="exam-item-left" style="line-height:35px" />
                <radio-group class="radio-group exam-item-left" style="margin-left:10px" name="{{questionItem.itemOrder}}_{{questionItem.id}}_{{questionItem.questionType}}">
                  <label class="radio exam-radio-item-label" wx:for="{{questionItem.items}}" wx:key="{{questionItem.prefix}}" wx:for-item="radioItem">
                    <radio color="#2d8cf0" value="{{radioItem.prefix}}" checked="{{radioItem.checked}}" class="exam-item-left" />
                    <rich-text nodes="{{radioItem.content}}" class="exam-item-left" />
                  </label>
                </radio-group>
              </view>
              <view wx:elif="{{questionItem.questionType === 4}}">
                <rich-text nodes="{{questionItem.itemOrder}}. {{questionItem.title}}" />
                <view class="exam-input-contain" wx:for="{{questionItem.items}}" wx:key="{{questionItem.prefix}}" wx:for-item="inputItem" wx:for-index="idx">
                  <view class="exam-input-contain-label">
                    {{ inputItem.prefix }}
                  </view>
                  <input class="exam-input-contain-content" maxlength="-1" name="{{questionItem.itemOrder}}_{{questionItem.id}}_{{questionItem.questionType}}_{{idx}}">
                </view>
              </view>
              <view wx:else>
                <rich-text nodes="{{questionItem.itemOrder}}. {{questionItem.title}}" />
                <view class="exam-textarea-contain">
                  <textarea placeholder="答案" maxlength="-1" name="{{questionItem.itemOrder}}_{{questionItem.id}}_{{questionItem.questionType}}" />
                </view>
              </view>
            </i-cell>
          </i-cell-group>
        </i-panel>

        <view>
          <button class="i-btn i-btn-primary i-btn-square" form-type="submit">
            提交
          </button>
        </view>

        <i-action-sheet visible="true" mask-closable="{{ false }}">
          <template #header>
            <view style="padding: 16px">
              <view class="exam-timeout-title">
                考试试卷结束，请提交试卷！
              </view>
              <button class="i-btn i-btn-primary i-btn-square" form-type="submit">
                提交
              </button>
            </view>
          </template>
        </i-action-sheet>
      </form>

      <i-modal title="考试结果" visible="{{modalShow}}" bind:ok="returnRecord" bind:cancel="returnRecord">
        <view>得分：{{ result }}</view>
      </i-modal>

      <i-spin size="large" fix wx:if="{{ spinShow }}" />
      <i-message id="message" />
    </view>
  </view>
</template>
