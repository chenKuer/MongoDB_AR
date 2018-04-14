# MongoDB_AR
This is the database for the 3D UI and AR Final Project, Using MongoDB to store informations, and  provide RESTful API for the Final Project

#### How to get info

### Prefix
https://morning-cliffs-86304.herokuapp.com

##### Get all flags
> this will return all the flags as an array 
``` Get method 
https://morning-cliffs-86304.herokuapp.com/flags
```

##### Add a flag
```json
//This is an example of flag
{
        "position": {
            "x": 12.23,
            "y": 15.01,
            "z": 1.01
        },
        "rotation": {
            "x": 3,
            "y": 0.1,
            "z": 30
        },
        "maxRGB": {
            "r": 12,
            "g": 34,
            "b": 12
        },
        "minRGB": {
            "r": 12,
            "g": 34,
            "b": 12
        },

        "name": "bottle",
    }

```

``` Post method
/flags
```


#### Get one flag by id 

``` Get method
/flags/id
```

#### delete one flag by id 
``` delete method 
/flags/id
```

#### update one flag by id 
* when update, you should send an new object the create object
``` patch method
/flags/id
```

