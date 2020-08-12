import React from 'react';
import { Button } from 'antd';

export default class Editor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id || null,
            ueEditor: null
        }
    }

    componentDidMount() {
        var UE = window.UE;
        let { id } = this.state;
        if (id) {
            try {
                UE.delEditor(id);
            } catch (error) { }
            let ueEditor = UE.getEditor(id, {
                autoHeightEnabled: true,
                autoFloatEnabled: true,
                //字体大小
                'fontsize': [10, 11, 12, 14, 16, 18, 20, 24, 36, 48],
                // 上传图片时后端提供的接口
                serverUrl: '',
                enableAutoSave: false,
                // eslint-disable-next-line no-dupe-keys
                autoHeightEnabled: false,
                initialFrameHeight: this.props.height,
                initialFrameWidth: '100%',
            });
            this.setState({ ueEditor });
            //判断有没有默认值
            ueEditor.ready((ueditr) => {
                var value = this.props.value ? this.props.value : '<p></p>';
                ueEditor.setContent(value);
            });

        }

    }

    render() {
        let { id } = this.state;
        return (<div >
            <textarea ref='ueditor' id={id} style={{ width: this.props.width, height: this.props.height }}></textarea>
            <div className='edit-btn'>
                <Button type="primary" onClick={() => { this.commit() }}>提交</Button>
                {/* <Button type="primary" onClick={() => { this.clearContent() }}>清空</Button> */}
            </div>
        </div>)
    }

    commit() {
        //将文本回调回去
        this.props.callback(this.state.ueEditor.getContent());
    }

    // clearContent() {
    //     //清空富文本内容
    //     console.log(this.refs);
    //     this.refs.ueditor.changeContent("");
    // }
}