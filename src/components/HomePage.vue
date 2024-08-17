<template>
    <div>
        <div class="card shadow-lg">
            <div class="card-header d-flex justify-content-between">
                <h4>Todo App With Vue </h4>
                <a href="" class="btn btn-dark text-white rounded">Add Todo</a>
            </div>
            <div class="card-body ">
                <div class="" >
                    <div class="d-flex justify-content-evenly p-2  ">
                        <div class="d-flex ">
                            <input class="form-check-input me-2 bg-secondary" type="checkbox" value="" >
                            <p>To write todo list with vue.</p>
                        </div>
                       <div class="">
                        <a href="" class="btn me-2 btn-sm delete text-white"><i class="fa-solid fa-trash"></i></a>
                        <a href="" class="btn btn-sm edit text-white"><i class="fa-solid fa-pen"></i></a>
                       </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.delete{
    background-color:brown;
}
.delete:hover,.edit:hover{
    background-color: black;

}
.edit {
    background-color: darkslateblue;
}

.card-body{
    background-color: cornsilk;
}
</style>
