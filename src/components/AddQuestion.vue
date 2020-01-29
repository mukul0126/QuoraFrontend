<template>
  <div class="add-question">
    <div class="category">
      <select>
          Category: 
        <option value="Tech">Tech</option>
        <option value="Politics">Politics</option>
        <option value="Sports">Sports</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
    <div class="question">
        Question: <input type="text">
    </div>
    <div class="tag">
        Tag someone to ask question: <input type="text">
    </div>
    <div class="buttons">
        <button>Submit</button>
        <button>Cancel</button>
    </div>
  </div>
</template>