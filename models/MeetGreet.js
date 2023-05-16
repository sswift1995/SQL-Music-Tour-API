'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
   
    static associate({ Band, Event }) {
      // Band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })


      // Event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  MeetGreet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  })
  return MeetGreet
}