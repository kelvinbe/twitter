import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { render } from '@testing-library/react';
import theme from '../date.styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

class DatePickers extends Component {
  state = { month: '', day: '', year: '' };

  render() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = [];
    const { classes, handleMonth, handleDay, handleYear } = this.props;
    const handleMonthChange = (event) => {
      this.setState({ month: event.target.value });
      handleMonth(event.target.value)
    };

    const handleDayChange = (event) => {
      this.setState({ day: event.target.value });
      handleDay(event.target.value)
    };

    const handleYearChange = (event) => {
      this.setState({ year: event.target.value });
      handleYear(event.target.value)
    };


    const displayMonths = months.map((month, i) => {
      return <MenuItem value={i+1}>{month}</MenuItem>;
    });

    const displayDays = () => {
      for (let i = 1; i <= 31; i++) {
        days.push(i);
      }

      const filteredDays = days.map((day, i) => {
        return <MenuItem value={i+1}>{day}</MenuItem>;
      });
      return filteredDays;
    };
    function displayYears() {
      var max = new Date().getFullYear();
      var min = max - 30;
      let years = [];

      for (let i = max; i >= min; i--) {
        years.push(i);
      }
      const filteredYears = years.map((year) => {
        return <MenuItem value={year}>{year}</MenuItem>;
      });
      return filteredYears;
    }
    const styles = {
      paddingBottom: '20px !important',
    };
    return (
      <form className={classes.container, classes.styles} noValidate>
        <Grid container spacing={2} style={{paddingBottom: '20px'}}>
          <Grid item xs={6}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel htmlFor='outlined-age-native-simple'>
                Month
              </InputLabel>

              <Select
                // className={styles}
                id='demo-simple-select'
                label='month'
                value={this.state.month}
                onChange={handleMonthChange}
              >
                {displayMonths}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel htmlFor='outlined-age-native-simple'>day</InputLabel>

              <Select
                fullWidth
                // className={styles}
                id='demo-simple-select'
                label='day'
                variant='outlined'
                value={this.state.day}
                onChange={handleDayChange}
              >
                {displayDays()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel htmlFor='outlined-age-native-simple'>year</InputLabel>

              <Select
                fullWidth
                // className={styles
                label='year'
                variant='outlined'
                id='demo-simple-select'
                value={this.state.year}
                onChange={handleYearChange}
                // input={classes.root}
              >
                {displayYears()}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(theme)(DatePickers);
