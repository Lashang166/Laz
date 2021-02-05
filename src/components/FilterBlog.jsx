import React from 'react'
import Typography from '@material-ui/core/Typography'

import { FormControlLabel, FormGroup, Checkbox, makeStyles } from '@material-ui/core';

import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import PanoramaFishEyeTwoToneIcon from '@material-ui/icons/PanoramaFishEyeTwoTone';

const useStyles = makeStyles((theme) => ({
    filter: {
        paddingTop: "15px",
        fontSize: "1rem"
    }
}))


const FilterBlog = ({title, lists, shap}) => {

    const classes = useStyles()

    return (
        <div className={classes.filter}>
            <Typography variant="h6" color="initial">
                {title}
            </Typography>
            <FormGroup>
            {
                lists.map((title, i) => (
                    <FormControlLabel 
                        control={ 
                                shap ?
                                <Checkbox
                                    icon={<PanoramaFishEyeRoundedIcon fontSize="small" />}
                                    checkedIcon={<PanoramaFishEyeTwoToneIcon style={{color: title }} fontSize="small"/>}
                                    style={{color: title}}
                                /> 
                                : 
                                <Checkbox color="primary" />
                                }   
                        label={shap ? "" :title}
                        key={i}
                        
                    />
                ))
            }
            </FormGroup>

        </div>
    )
}

export default FilterBlog
