

// This function returns an array with two identical objects 
// in it, each with the following properties:
//  type
//  height
//  output


export const createCorn = () => {
    const cornCouple = [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]

    return cornCouple
}