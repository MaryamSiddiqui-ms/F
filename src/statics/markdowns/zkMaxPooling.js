const zkMaxPooling = `# zkMaxPooling

The zkMaxPooling function is designed to generate zero-knowledge proofs (ZKPs) for the operation of max pooling in a neural network, which is a technique used to downsample input by taking the maximum value in a region. 

## Code
 - **Python Code:**

 - **Zokrates Code:**
    -  It imports the constants size1 and size2 from size1.zok and size2.zok files. 
	- The maxInArray function defined here performs the max pooling operation on two arrays of values. 
	- It iterates through each value in the first array, ensuring that each value is greater than or equal to a threshold (which is a parameter of the function). 
	- The main function takes two private arrays of values and a filter size as input. It asserts that the maxInArray function returns true, thereby generating a zero-knowledge proof of the correctness of the max pooling operation.
	    
## Limitations:

 - 


## Example Model: 
Convolutional Neural Networks [CNN](/examples/CNN), the zkMaxPooling function can be used to prove the correctness of a max pooling operation without revealing the input data or the model's internal computations. 
`

export default zkMaxPooling;