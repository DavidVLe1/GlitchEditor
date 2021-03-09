
function addFields() {    
	document.getElementById("myTable").insertRow(-1).innerHTML = '<tr>'
	+'<td><textarea name="Question" placeholder="Description" th:field="${reviewers}" id="reviewers" style = "resize: none; width:100%;"></textarea></td>'

	+'<td><textarea name="Answer" placeholder ="Reviewers" th: field="${description}" id="description" style="resize:none;width: 100%;"></textarea></td >'
	+'<td><textarea name="Answer" placeholder ="Status" th: field="${status}" id="status" style="resize:none;width: 100%;"></textarea></td >'
	+'<td><textarea name="Answer" placeholder ="Severity" th: field="${severity}" id="severity" style="resize:none;width: 100%;"></textarea></td >'
	+'<td><button id="deleteBugButton" class="bug-btn" >Delete</button></td >'
	+'</tr>';
}

$(document).ready(function(){
	$(".addCF").click(function(){
		$("#customFields").append('<tr valign="top"><td><input type="text" class="code" id="customFieldName" name="customFieldName[]" value="" placeholder="Input Name" /> </td><td>&nbsp;<input type="text" class="code" id="customFieldValue" name="customFieldValue[]" value="" placeholder="Input Value" /> </td><td><input type="text" class="code" id="customFieldName" name="customFieldName[]" value="" placeholder="Input Name" /> </td><td>&nbsp;<input type="text" class="code" id="customFieldValue" name="customFieldValue[]" value="" placeholder="Input Value" /> </td><td>&nbsp; <a href="javascript:void(0);" class="remCF">Remove</a></td></tr>');
	});
    $("#customFields").on('click','.remCF',function(){
        $(this).parent().parent().remove();
    });
});

