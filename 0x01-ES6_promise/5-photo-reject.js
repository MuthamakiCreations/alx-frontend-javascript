export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulating some processing logic
    const isValid = Math.random() < 0.5;

    if (isValid) {
      // Simulating successful processing
      resolve(`File ${fileName} has been processed successfully`);
    } else {
      // Simulating a failure with an error message
      const errorMessage = `${fileName} cannot be processed`;
      reject(new Error(errorMessage));
    }
  });
}
