import React from 'react'

class NoteInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            max : 50,
            title: '',
            body: '',
        }
    }

    onChangeTitle(event){
        const inputLength = event.target.value.length;
        const maxInputLength = 50;

        this.setState(()=>{
            return {
                max: maxInputLength - inputLength,
                title: event.target.value,
            }
        })
    }

    onChangeBody(event){
        this.setState(()=>{
            return {
                body: event.target.value
            }
        })
    }

    onClickSubmit(event){
        if(this.state.name !== '' && this.state.body !== ''){
            event.preventDefault();
            this.props.addNotes(this.state);  
            this.onClickReset(event)
        }
    }
    onClickReset(){
        this.setState(()=>{
            return {
                title : '',
                body : '',
                max:50
            }
        })
    }
    
    render() {
        return (
            <div className='note-input'>
                <h3>Buat Catatan</h3>
                <form id='create-course-form'>
                    <p className='note-input__title__char-limit'>Sisa Karakter: {this.state.max}</p>
                    <input name='title' value={this.state.title} className='note-input__title' type="text" placeholder='Ini adalah judul ...' onChange={this.onChangeTitle.bind(this)} maxLength={50} required/>
                    <textarea name='body' value={this.state.body} className='note-input__body' type="text" placeholder='Tuliskan catatanmu di sini ...' onChange={this.onChangeBody.bind(this)} required/>
                    <button type="submit" onClick={this.onClickSubmit.bind(this)}>Buat</button>
                    {/* <button onClick={this.onClickReset.bind(this)}>Reset</button> */}
                    
                </form>

            </div>
        )
    }
}

export default NoteInput