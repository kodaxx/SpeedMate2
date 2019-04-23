export default {
  operation: 'face',
  tool: 'hss',
  selected: {
    name: 'Aluminum',
    id: 'aluminum',
    operations: {
      face: {
        name: 'Face Milling',
        sfpm: {
          hss: [600, 1800],
          carbide: [1000, 2000]
        },
        ipt: {
          hss: [0.010, 0.022],
          carbide: [0.012, 0.020]
        }
      },
      slab: {
        name: 'Slab/Side Milling',
        hss: [500, 1300],
        carbide: [1000, 3000]
      },
      end: {
        name: 'End Milling',
        hss: [400, 800],
        carbide: [800, 2000]
      },
      turn: {
        name: 'Turning',
        hss: [600, 1000],
        carbide: [1000, 2000]
      },
      bore: {
        name: 'Boring',
        hss: [500, 750],
        carbide: [800, 1600]
      },
      drill: {
        name: 'Drilling',
        hss: [140, 300],
        angle: [90, 140]
      },
      ream: {
        name: 'Reaming',
        hss: [100, 200],
        carbide: [400, 850]
      },
      counter: {
        name: 'Counter-Boring',
        hss: [140, 300],
        carbide: [300, 500]
      }
    }
  },
  diameter: 0,
  teeth: '1',
  rpm: {
    low: 0,
    high: 0
  },
  angle: {
    low: 0,
    high: 0
  },
  message: '',
  specificRpm: 0,
  feed: {
    low: 0,
    high: 0
  },
  materials: {
    aluminum: {
      name: 'Aluminum',
      id: 'aluminum',
      operations: {
        face: {
          name: 'Face Milling',
          sfpm: {
            hss: [600, 1800],
            carbide: [1000, 2000]
          },
          ipt: {
            hss: [[0.010, 0.022]],
            carbide: [[0.012, 0.020]]
          }
        },
        slab: {
          name: 'Slab/Side Milling',
          hss: [500, 1300],
          carbide: [1000, 3000]
        },
        end: {
          name: 'End Milling',
          sfpm: {
            hss: [400, 800],
            carbide: [800, 2000]
          },
          ipt: {
            hss: [[0.001, 0.004], [0.002, 0.006], [0.003, 0.008], [0.004, 0.008], [0.005, 0.010]],
            carbide: [[0.002, 0.004], [0.003, 0.006], [0.004, 0.008], [0.006, 0.009], [0.007, 0.010]]
          }
        },
        turn: {
          name: 'Turning',
          hss: [600, 1000],
          carbide: [1000, 2000]
        },
        bore: {
          name: 'Boring',
          hss: [500, 750],
          carbide: [800, 1600]
        },
        drill: {
          name: 'Drilling',
          hss: [140, 300],
          angle: [90, 140]
        },
        ream: {
          name: 'Reaming',
          hss: [100, 200],
          carbide: [400, 850]
        },
        counter: {
          name: 'Counter-Boring',
          hss: [140, 300],
          carbide: [300, 500]
        }
      }
    },
    brass: {
      name: 'Brass',
      id: 'brass',
      operations: {
        face: {
          name: 'Face Milling',
          hss: [300, 450],
          carbide: [600, 1300]
        },
        slab: {
          name: 'Slab/Side Milling',
          hss: [280, 450],
          carbide: [500, 1000]
        },
        end: {
          name: 'End Milling',
          hss: [200, 350],
          carbide: [500, 800]
        },
        turn: {
          name: 'Turning',
          hss: [350, 500],
          carbide: [600, 1000]
        },
        bore: {
          name: 'Boring',
          hss: [300, 400],
          carbide: [400, 900]
        },
        drill: {
          name: 'Drilling',
          hss: [140, 200],
          angle: [118, 125]
        },
        ream: {
          name: 'Reaming',
          hss: [100, 180],
          carbide: [300, 360]
        },
        counter: {
          name: 'Couner-Boring',
          hss: [140, 200],
          carbide: [300, 400]
        }
      }
    }
  }
}
