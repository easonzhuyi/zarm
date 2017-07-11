import React, { PureComponent } from 'react';
import Header from '../components/Header';
import { Panel, Cell, Picker } from '../../components';
import District from './district';

class Page extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      single: {},
      multiple: {},
      disabled: {
        value: ['1'],
      },
      diy: {},
      city1: {},
      city2: {},
      yearPicker: {},
      datePicker: {},
      timePicker: {},
      datetimePicker: {},
      diyDatePicker: {},
    };
  }

  render() {
    const { single, multiple, disabled, diy, city1, city2, yearPicker, datePicker, timePicker, datetimePicker, diyDatePicker } = this.state;

    return (
      <div className="cell-page">
        <Header title="选择器 Picker" />
        <main>
          <Panel>
            <Panel.Header>
              <Panel.Title>基本</Panel.Title>
            </Panel.Header>
            <Panel.Body>

              <Cell title="单列" type="select">
                <Picker
                  visible={single.visible}
                  dataSource={[
                    { value: '1', label: '选项一' },
                    { value: '2', label: '选项二' },
                  ]}
                  cols={1}
                  value={single.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="多列" type="select">
                <Picker
                  visible={multiple.visible}
                  dataSource={[
                    [
                      { value: '1', label: '选项一' },
                      { value: '2', label: '选项二' },
                    ],
                    [
                      { value: 'a', label: '选项A' },
                      { value: 'b', label: '选项B' },
                    ],
                  ]}
                  cols={2}
                  value={multiple.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="多列联动" type="select">
                <Picker
                  visible={multiple.visible}
                  dataSource={[
                    {
                      value: '1',
                      label: '北京市',
                      children: [
                        { value: '11', label: '海淀区' },
                        { value: '12', label: '西城区' },
                      ],
                    },
                    {
                      value: '2',
                      label: '上海市',
                      children: [
                        { value: '21', label: '黄埔区' },
                        { value: '22', label: '虹口区' },
                      ],
                    },
                  ]}
                  cols={2}
                  value={multiple.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="禁止修改" type="select">
                <Picker
                  disabled
                  visible={disabled.visible}
                  dataSource={[
                    { value: '1', label: '选项一' },
                    { value: '2', label: '选项二' },
                  ]}
                  cols={1}
                  value={disabled.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="自定义格式" type="select">
                <Picker
                  visible={diy.visible}
                  title="自定义标题"
                  placeholder="自定义placeholder"
                  format="/"
                  dataSource={[
                    [
                      { value: '1', label: '选项一' },
                      { value: '2', label: '选项二' },
                    ],
                    [
                      { value: 'a', label: '选项A' },
                      { value: 'b', label: '选项B' },
                    ],
                  ]}
                  cols={2}
                  displayMember="label"
                  valueMember="label"
                  value={diy.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

            </Panel.Body>
          </Panel>

          <Panel>
            <Panel.Header>
              <Panel.Title>城市选择器</Panel.Title>
            </Panel.Header>
            <Panel.Body>

              <Cell title="省市选择" type="select">
                <Picker
                  visible={city1.visible}
                  dataSource={District}
                  cols={2}
                  displayMember="label"
                  valueMember="label"
                  value={city1.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="省市区选择" type="select">
                <Picker
                  visible={city2.visible}
                  dataSource={District}
                  cols={3}
                  displayMember="label"
                  valueMember="label"
                  value={city2.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

            </Panel.Body>
          </Panel>

          <Panel>
            <Panel.Header>
              <Panel.Title>日期选择器</Panel.Title>
            </Panel.Header>
            <Panel.Body>

              <Cell title="年份选择" type="select">
                <Picker.Date
                  title="选择年份"
                  placeholder="请选择年份"
                  mode="year"
                  value={yearPicker.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="日期选择" type="select">
                <Picker.Date
                  title="选择日期"
                  placeholder="请选择日期"
                  mode="date"
                  value={datePicker.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="时间选择" type="select">
                <Picker.Date
                  title="选择时间"
                  placeholder="请选择时间"
                  mode="time"
                  value={timePicker.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="日期&时间" type="select">
                <Picker.Date
                  placeholder="请选择"
                  mode="datetime"
                  value={datetimePicker.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

              <Cell title="自定义格式" type="select">
                <Picker.Date
                  title="选择日期"
                  placeholder="请选择日期"
                  mode="date"
                  format="YYYY年MM月DD日"
                  value={diyDatePicker.value}
                  onOk={(value) => {
                    console.log(value);
                  }}
                  onCancel={() => {
                  }}
                  />
              </Cell>

            </Panel.Body>
          </Panel>
        </main>
      </div>
    );
  }
}

export default Page;