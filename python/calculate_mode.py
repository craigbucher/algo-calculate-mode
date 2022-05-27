def calculate_mode(arr):
    arr_obj = {}
    result = []
    # iterate over the input array
    for i in range(0, len(arr)):
        # create list of keys object
        keys = arr_obj.keys()
        # created this becuase using arr[i] below gave an error
        current = arr[i]
        # if current key exists, increment it by one
        if current in keys:
            arr_obj[current] += 1
        # if current key doesn't exist, establish it with a value of one
        else:
            arr_obj[current] = 1
    max = 0
    # iterate over keys to find the maximum value
    for key in arr_obj:
        if arr_obj[key] > max:
            max = arr_obj[key]
    # iterate over keys to find specific key(s) with maximum value and add to result
    for key in arr_obj:
        if arr_obj[key] == max:
            result.append([key])
    return(result)
print(calculate_mode([1,2,3]))