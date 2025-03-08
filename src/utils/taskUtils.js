// taskUtils.js

/**
 * Merges multiple wedding to-do data arrays into one unified array.
 * It reads each array, checks for duplicates (by id or task text), groups tasks by category,
 * and returns a final single weddingToDoData array.
 *
 * @param {Array<Array>} dataArrays - Array of wedding to-do data arrays.
 * @returns {Array} - Unified wedding to-do data array.
 */
export const mergeWeddingToDoData = (dataArrays) => {
  const merged = {};

  dataArrays.forEach((data) => {
    data.forEach((categoryItem) => {
      const { category, tasks } = categoryItem;
      if (!merged[category]) {
        merged[category] = { category, tasks: [] };
      }
      tasks.forEach((task) => {
        // Check if a task with the same id or task text already exists
        const exists = merged[category].tasks.some(
          (t) => t.id === task.id || t.task === task.task
        );
        if (!exists) {
          merged[category].tasks.push(task);
        }
      });
    });
  });

  return Object.values(merged);
};
