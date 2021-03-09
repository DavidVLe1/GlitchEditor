$(document).ready(function(){
	$(".addCF").click(function(){
		$("#customFields").append('<tr valign="top"><td><input type="text" class="code" id="customFieldName" name="customFieldName[]" value="" placeholder="Input Name" /> </td><td>&nbsp;<input type="text" class="code" id="customFieldValue" name="customFieldValue[]" value="" placeholder="Input Value" /> </td><td><input type="text" class="code" id="customFieldName" name="customFieldName[]" value="" placeholder="Input Name" /> </td><td>&nbsp;<input type="text" class="code" id="customFieldValue" name="customFieldValue[]" value="" placeholder="Input Value" /> </td><td>&nbsp; <a href="javascript:void(0);" class="remCF">Remove</a></td></tr>');
	});
    $("#customFields").on('click','.remCF',function(){
        $(this).parent().parent().remove();
    });
});

