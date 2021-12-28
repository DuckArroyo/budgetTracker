// holds db connection
let db;

// connect to... 'budget' and ser to version 1
const request = indexedDB.open('budget', 1);

// updates and versions budget "automatically"
request.onupgradeneeded = function (e) {
  const db = e.target.result;
  db.createObjectStore('new_budget', { autoIncrement: true });
};

request.onsuccess = function (e) {
  db = e.target.result;

  // once online upload
  if (navigator.onLine) {
    // uploadPizza();
  }
};

request.onerror = function (e) {
  console.log(e.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(['new_budget'], 'readwrite');

  const budgetObjectStore = transaction.objectStore('new_budget');

  budgetObjectStore.add(record);
}

function uploadBudget() {
    const transaction = db.transaction(['new_budget'], 'readwrite');

    const budgetObjectStore = transaction.objectStore('new_budget');

    const getAll = budgetOjectStore.getAll();

}