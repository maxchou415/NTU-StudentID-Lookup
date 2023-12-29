// index.d.ts

// Define the shape of the input parameter for the Lookup function
interface LookupOptions {
    studentId: string;
}

// Declare the Lookup function with its expected input and output types
declare function Lookup(options: LookupOptions): string;

// Declare that the Lookup function is the default export
export default Lookup;
