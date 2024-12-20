<template>
    <div class="create-snippet-tool">
        <h1>Snippet Manager Tool</h1>
        <input placeholder="Git description" class="input-snippet" />
        <textarea class="code-textarea"></textarea>
        <div class="buttons-snippet">
            <button class="add-file-button">Add file</button>
            <button class="add-create-button">Create</button>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
}

.create-snippet-tool {
    width: 700px;
}

.code-textarea {
    width: 100%;
    height: 400px;
    margin-top: 10px;
    border: 1px solid #C5C6C7;
    border-radius: 5px;
}

.input-snippet {
    width: 100%;
    height: 40px;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #C5C6C7;
    border-radius: 5px;
}

.buttons-snippet {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    ;
}

.add-file-button {
    border: none;
    background-color: #eee;
    border-radius: 5px;
    padding: 10px;
}

.add-create-button {
    border: none;
    background-color: green;
    border-radius: 5px;
    padding: 10px;
    color: white;
}
</style>
