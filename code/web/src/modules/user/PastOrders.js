//Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H6 } from '../../ui/typography'
import {grey1, grey2, grey } from '../../ui/common/colors';

// Component
class PastOrders extends PureComponent {

    componentDidMount() {

    }

    render() {
        return (
          <div>
            <Grid style={{ backgroundColor: grey }}>
              <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                <H3 font="secondary">My Past Orders</H3>
                <p style={{ marginTop: '1em', color: grey2 }}>
                  Watch this space to see what you have kept or returned from
                  your past crates.
                </p>
              </GridCell>
            </Grid>
            <Grid
              style={{ backgroundColor: grey2, margin: '3em', padding: '.5em' }}
            >
              <H6
                style={{
                  textAlign: 'left',
                  padding: '.5em',
                  marginRight: '.5em',
                }}
              >
                Delivered:
              </H6>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
            </Grid>
            <Grid
              style={{
                backgroundColor: grey1,
                margin: '3em',
                padding: '.5em',
              }}
            >
              <H6
                style={{
                  textAlign: 'left',
                  padding: '.5em',
                  marginRight: '.5em',
                }}
              >
                Delivered:
              </H6>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
              <GridCell style={{ textAlign: 'center' }}>
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmxYkmH9BRcMKj8QFHWz8AU92943C0djkzylgdY8N3ElCVq2S6tqJoX0dTw5F7M9KCAmKMGA2W84oBwLpbnG47OBAFIqOso4OkX4T7lAs&usqp=CAc"
                  style={{ width: '125px' }}
                />
                <H6>Jeans</H6>
                <p>You Kept These!</p>
              </GridCell>
            </Grid>
          </div>
        );
    }
}

export default PastOrders