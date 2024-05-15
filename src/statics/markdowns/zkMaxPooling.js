const zkMaxPooling = `# zkMaxPooling

This function generates proofs for the max pooling operation in neural
networks, crucial for downsampling input data while maintaining privacy.

## Code
 - **Python Code:**
 - The zkMaxPooling function takes an input array (presumably the output of a neural network layer), performs max pooling on it, prepares the data for Zokrates, and generates proofs.
 - It applies max pooling operation on the input array with a specified pool size (in this case, 2x2).
 - It converts the pooled array into a 1D array and normalizes it.
 - It sets up the necessary files and directories for Zokrates, including size.zok and input.json.
 - It runs Zokrates commands to compile the code, set up proving scheme, compute witness, and generate proof.
 - Finally, it returns the pooled array and the generated proof.
 
 - **Zokrates Code:**
    -  The Zokrates code is written in maxpooling.zok.
	- It imports size.zok, which defines the sizes of the two input arrays (size1 and size2).
	- The maxInArray function validates that each element in the first array is the maximum within its corresponding pool in the second array. It checks if the max value in each pool matches the corresponding value in the second array.
	- The main function calls maxInArray with the provided inputs and asserts that the result is true, indicating that the max pooling operation is correctly performed.
## Limitations:
- Similar to the previous code, this implementation assumes correct installation and availability of Zokrates.
- It also assumes correct formatting of input arguments and valid max pooling operation.
- This code is designed for specific use cases and may need modification for different scenarios or input formats.

## Example Model: 
Convolutional Neural Networks [CNN](/examples/CNN), the zkMaxPooling function can be used to prove the correctness of a max pooling operation without revealing the input data or the model's internal computations. 
`

export default zkMaxPooling;