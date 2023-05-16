'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    
    static associate({ Band, Event, Stage }) {
      // Band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // Event
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // Stage 
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  };
  SetTime.init({
    set_time_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
  })
  return SetTime
}