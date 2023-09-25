<script>
function validateForm() {
    
    let comments = document.forms["form_container"]["comments"].value;
    if (comments.length < 10) {
        alert("Comments should be 10 or more characters");
        return false;
    }
    return true;
}
</script>
