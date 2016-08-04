const App=React.createClass({
   render:function(){
       return <div>
           <button>预览</button>
           <div>
               <Editor/>
           </div>
           <div>
               <Preview/>
           </div>
       </div>

   }
});

const Editor=React.createClass({
    render:function(){
        return <div>
            Editor
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