(function(){
    
    var heirarchy = {
		parent: {
			parent: {
				parent: {
					parent: null,
					parentOtherProp: "Parent Other Prop"
				},
				otherProperty: "Other Prop"
			},
			otherSubChildProperty: "Sub Child Prop"
		},
		otherChildProperty: "Child Prop"
	}
    
    function getParentByLoop(container) {
        while(container.parent !== null) {
            container = container.parent;
        }
        return container;
    }
    
	function getParent(container) {
		return container.parent === null ? container : getParent(container.parent);
	}    
	
	console.log("function getParent(container) {" +
	"return container.parent === null ? container : getParent(container.parent);}");
	console.log("Parent Other Property: " + getParent(heirarchy).parentOtherProp);
}());