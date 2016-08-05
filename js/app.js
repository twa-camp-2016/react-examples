const App=React.createClass({
    getInitialState:function(){
        return ({
            isEditor:true,
            elements:[]
        })

    },
    display:function(){
       const isEditor=this.state.isEditor;
        this.setState({isEditor:!isEditor})

    },
    addElement:function (element) {
      const elements=this.state.elements;
        elements.push(element);
        this.setState({
            elements
        });
    },
   render:function(){
       const isEditor=this.state.isEditor;
       const elements=this.state.elements;
       return <div>
           <button onClick={this.display}>{isEditor?'预览':'编辑'}</button>
           <div className={isEditor?'':'hidden'}>
               <Editor elements={elements} onAdd={this.addElement}/>
           </div>
           <div className={isEditor?'hidden':''}>
               <Preview/>
           </div>
       </div>

   }
});

const Editor=React.createClass({
    render:function(){
        return <div>
            <Left elements={this.props.elements}/>
            <Right onAdd={this.props.onAdd}/>
        </div>

    }
});
const Left=React.createClass({
    render:function(){
        const elements=this.props.elements.map((ele,index)=>{
           return <div key={index}>
               <input type={ele}/>
               <button>X</button>
           </div>
        });
        return <div>
            {elements}
        </div>

    }
});
const Right=React.createClass({
    add:function(){
        const element=$('input[name=element]:checked').val()
        this.props.onAdd(element);
    },
    render:function(){
        return <div>
            <input type="radio" name="element" value="text"/>text
            <input type="radio" name="element" value="date"/>date
            <button onClick={this.add}>+</button>
        </div>

    }
});
const Preview=React.createClass({
    render:function(){
        return <div>
            Preview
        </div>

    }
});



ReactDOM.render(<App/>,document.getElementById('content'));