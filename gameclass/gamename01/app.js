
selectlabel = [];


function gettag(labelpool) {
        var viewlabel = document.querySelector('#label_view');
        
        for(let i=0;i<labelpool.length;i++){
            var newlabel = labelpool[i];
            var a = document.createElement("a");
            a.setAttribute("href", "javascript:void(0);");
            a.setAttribute("onclick", "querytag(this)");
            a.setAttribute("class", "labelpool badge badge-dark");
            a.innerHTML = newlabel;
            viewlabel.appendChild(a);
        }
}


function querytag(event) {
    var viewlabel = document.querySelector('#queryTags');

    if (selectlabel.includes(event.innerHTML)){
        return;
    }
    var a = document.createElement("a");
    a.setAttribute("href", "javascript:void(0);");
    a.setAttribute("onclick", "deletetag(this)");
    a.setAttribute("class", "labelpool badge badge-dark");
    a.innerHTML = event.innerHTML;
    viewlabel.appendChild(a);
    selectlabel.push(event.innerHTML)
}

function deletetag(event) {
    var parent = event.parentNode;

    for( var i = 0; i < selectlabel.length; i++){ 
        if ( selectlabel[i] == event.innerHTML) {
            selectlabel.splice(i, 1); 
        }
     }
    parent.removeChild(event)
}

class App{
    constructor(label) {
        this.labelpool = JSON.parse(label);
        console.log(this.labelpool);
        this.addtag = this.addtag.bind(this);
        gettag(this.labelpool);

    }

    addtag() {
        
    }


}
