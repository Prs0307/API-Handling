import express from 'express';
const app = express();


app.get('/api/products', (req, res) => {
    //create sample api which have array of products
    const products ={
        "data": {
          "saltSuggestions": [
            {
              "id": 487,
              "salt": "Paracetamol+Paracetamol",
              "salt_frequency": 19,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "300mg+700mg",
                "Packing": "10 tablet sr"
              },
              "salt_forms_json": {
                "Tablet": {
                  "300mg+700mg": {
                    "10 tablet sr": {
                      "2863": [
                        {
                          "pharmacy_id": 3,
                          "selling_price": 50
                        },
                        {
                          "pharmacy_id": 2,
                          "selling_price": 44
                        }
                      ],
                      "31440": null,
                      "75341": [
                        {
                          "pharmacy_id": 2,
                          "selling_price": 80
                        },
                        {
                          "pharmacy_id": 1,
                          "selling_price": 90
                        }
                      ],
                      "76373": null,
                      "118348": null,
                      "150077": null,
                      "166623": null,
                      "180695": null,
                      "197436": null
                    },
                    "10 tablet ir": {
                      "115": null,
                      "92010": null,
                      "147919": null,
                      "148275": null
                    },
                    "12 tablet sr": {
                      "161890": null,
                      "217427": null
                    },
                    "12 tablet ir": {
                      "147803": null,
                      "217902": null
                    },
                    "10 tablet er": {
                      "217452": null
                    }
                  },
                  "325mg+675mg": {
                    "10 tablet ir": {
                      "127153": null
                    }
                  }
                }
              }
            },
            {
              "id": 2,
              "salt": "Paracetamol",
              "salt_frequency": 1694,
              "available_forms": [
                "Tablet",
                "Oral Liquid",
                "Miscellaneous",
                "Drops",
                "Injection",
                "Capsule"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "650mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Oral Liquid": {
                  "120mg/5ml": {
                    "60 ml": {
                      "5092": null,
                      "27585": null,
                      "29926": null,
                      "30517": null,
                      "37922": null,
                      "41000": null,
                      "49681": null,
                      "52210": null,
                      "72628": null,
                      "72880": null,
                      "79744": null,
                      "97828": null,
                      "98402": null,
                      "114199": null,
                      "147540": null,
                      "147703": null,
                      "153018": null,
                      "153824": null,
                      "158913": null,
                      "159386": null,
                      "183366": null,
                      "195688": null
                    },
                    "30 ml": {
                      "153844": null
                    }
                  },
                  "100mg/ml": {
                    "15 ml": {
                      "9430": null,
                      "22725": null,
                      "29843": null,
                      "30163": null,
                      "49417": null,
                      "50301": null,
                      "83409": null,
                      "147485": null,
                      "147557": null,
                      "148227": null,
                      "150961": null,
                      "152004": null,
                      "177211": null,
                      "191044": null,
                      "217956": null
                    },
                    "30 ml": {
                      "1727": null
                    }
                  },
                  "250mg/5ml": {
                    "60 ml": {
                      "3702": null,
                      "5948": null,
                      "6534": null,
                      "7099": null,
                      "8240": null,
                      "12711": null,
                      "13828": null,
                      "14452": null,
                      "15337": null,
                      "15908": null,
                      "17856": null,
                      "23009": null,
                      "24008": null,
                      "24035": null,
                      "25115": null,
                      "25962": null,
                      "27956": null,
                      "29819": null,
                      "29895": null,
                      "31349": null,
                      "34506": null,
                      "35155": null,
                      "37129": null,
                      "37989": null,
                      "38105": null,
                      "40395": null,
                      "40936": null,
                      "45996": null,
                      "47615": null,
                      "48038": null,
                      "48141": null,
                      "48893": null,
                      "49334": null,
                      "49605": null,
                      "50367": null,
                      "50927": null,
                      "53343": null,
                      "53777": null,
                      "56356": null,
                      "56852": null,
                      "58447": null,
                      "58595": null,
                      "72709": null,
                      "73809": null,
                      "73929": null,
                      "74509": null,
                      "75020": null,
                      "75049": null,
                      "75075": null,
                      "75106": null,
                      "75722": null,
                      "75905": null,
                      "76023": null,
                      "76251": null,
                      "76754": null,
                      "77469": null,
                      "77476": null,
                      "77727": null,
                      "77762": null,
                      "77786": null,
                      "78202": null,
                      "78347": null,
                      "78810": null,
                      "79858": null,
                      "85949": null,
                      "87907": null,
                      "90697": null,
                      "95064": null,
                      "96194": null,
                      "96227": null,
                      "96395": null,
                      "97487": null,
                      "98275": null,
                      "112238": null,
                      "112343": null,
                      "113327": null,
                      "114091": null,
                      "116927": null,
                      "116985": null,
                      "117319": null,
                      "118974": null,
                      "119156": null,
                      "119681": null,
                      "121272": null,
                      "121281": null,
                      "122195": null,
                      "122800": null,
                      "123305": null,
                      "124548": null,
                      "129643": null,
                      "131489": null,
                      "132230": null,
                      "132692": null,
                      "132908": null,
                      "133786": null,
                      "134953": null,
                      "134997": null,
                      "135348": null,
                      "135831": null,
                      "139525": null,
                      "139675": null,
                      "143379": null,
                      "147499": null,
                      "147562": null,
                      "147651": null,
                      "147997": null,
                      "148128": null,
                      "148856": null,
                      "149084": null,
                      "149384": null,
                      "149393": null,
                      "149587": null,
                      "149741": null,
                      "149959": null,
                      "150279": null,
                      "150708": null,
                      "151047": null,
                      "151059": null,
                      "151394": null,
                      "151624": null,
                      "151667": null,
                      "151817": null,
                      "152111": null,
                      "152482": null,
                      "152773": null,
                      "152789": null,
                      "152807": null,
                      "153091": null,
                      "153524": null,
                      "153895": null,
                      "154213": null,
                      "154504": null,
                      "154591": null,
                      "154752": null,
                      "155031": null,
                      "155405": null,
                      "155605": null,
                      "155697": null,
                      "155702": null,
                      "155818": null,
                      "156048": null,
                      "156141": null,
                      "156150": null,
                      "156247": null,
                      "156432": null,
                      "156487": null,
                      "156927": null,
                      "156937": null,
                      "157084": null,
                      "157211": null,
                      "157215": null,
                      "157216": null,
                      "157289": null,
                      "157302": null,
                      "157527": null,
                      "157877": null,
                      "157975": null,
                      "157980": null,
                      "157982": null,
                      "158058": null,
                      "158148": null,
                      "158505": null,
                      "158512": null,
                      "158717": null,
                      "158726": null,
                      "159088": null,
                      "159095": null,
                      "159203": null,
                      "159292": null,
                      "159387": null,
                      "159590": null,
                      "159598": null,
                      "159804": null,
                      "159805": null,
                      "159808": null,
                      "160043": null,
                      "160128": null,
                      "160142": null,
                      "160144": null,
                      "160454": null,
                      "160583": null,
                      "160710": null,
                      "160715": null,
                      "161040": null,
                      "164704": null,
                      "166337": null,
                      "170749": null,
                      "171715": null,
                      "171855": null,
                      "172781": null,
                      "173301": null,
                      "173700": null,
                      "175384": null,
                      "177059": null,
                      "180242": null,
                      "180765": null,
                      "182008": null,
                      "182172": null,
                      "185176": null,
                      "185351": null,
                      "187190": null,
                      "187785": null,
                      "187984": null,
                      "189304": null,
                      "191410": null,
                      "192579": null,
                      "195043": null,
                      "196226": null,
                      "196304": null,
                      "196624": null,
                      "198017": null,
                      "198785": null,
                      "198985": null,
                      "213177": null,
                      "213739": null,
                      "216157": null,
                      "216602": null,
                      "217782": null
                    },
                    "30 ml": {
                      "77654": null,
                      "180639": null
                    },
                    "100 ml": {
                      "13484": null
                    }
                  },
                  "125mg/5ml": {
                    "60 ml": {
                      "2732": null,
                      "8794": null,
                      "10606": null,
                      "11730": null,
                      "13381": null,
                      "13851": null,
                      "17538": null,
                      "19647": null,
                      "23001": null,
                      "24046": null,
                      "28696": null,
                      "36958": null,
                      "40831": null,
                      "41366": null,
                      "50280": null,
                      "52675": null,
                      "53060": null,
                      "58163": null,
                      "58406": null,
                      "59038": null,
                      "59887": null,
                      "73195": null,
                      "73397": null,
                      "74251": null,
                      "74877": null,
                      "75279": null,
                      "79162": null,
                      "79975": null,
                      "90785": null,
                      "96251": null,
                      "113078": null,
                      "114002": null,
                      "114909": null,
                      "117989": null,
                      "119382": null,
                      "120667": null,
                      "120944": null,
                      "123341": null,
                      "134194": null,
                      "140074": null,
                      "144916": null,
                      "147586": null,
                      "147676": null,
                      "147690": null,
                      "147892": null,
                      "148020": null,
                      "148245": null,
                      "148529": null,
                      "150595": null,
                      "151162": null,
                      "151214": null,
                      "152225": null,
                      "152715": null,
                      "152758": null,
                      "152835": null,
                      "153092": null,
                      "153152": null,
                      "153289": null,
                      "153984": null,
                      "154549": null,
                      "155358": null,
                      "155600": null,
                      "156596": null,
                      "156801": null,
                      "157002": null,
                      "157015": null,
                      "157152": null,
                      "157288": null,
                      "157290": null,
                      "157370": null,
                      "157376": null,
                      "157864": null,
                      "157974": null,
                      "158607": null,
                      "158609": null,
                      "158805": null,
                      "158998": null,
                      "159005": null,
                      "159199": null,
                      "159919": null,
                      "160450": null,
                      "161149": null,
                      "168581": null,
                      "172083": null,
                      "175703": null,
                      "177225": null,
                      "182028": null,
                      "182262": null,
                      "186117": null,
                      "187075": null,
                      "191397": null,
                      "195469": null,
                      "213624": null,
                      "216268": null,
                      "225219": null
                    },
                    "450 ml": {
                      "97681": null
                    },
                    "100 ml": {
                      "113755": null
                    }
                  },
                  "250mg": {
                    "60 ml": {
                      "7835": null,
                      "9139": null,
                      "9902": null,
                      "11294": null,
                      "14045": null,
                      "14388": null,
                      "18189": null,
                      "18348": null,
                      "19121": null,
                      "19131": null,
                      "19310": null,
                      "20067": null,
                      "20078": null,
                      "22181": null,
                      "26572": null,
                      "28344": null,
                      "28967": null,
                      "34275": null,
                      "40151": null,
                      "40625": null,
                      "42160": null,
                      "44258": null,
                      "44469": null,
                      "44980": null,
                      "53410": null,
                      "53859": null,
                      "58978": null,
                      "59523": null,
                      "60283": null,
                      "60749": null,
                      "72526": null,
                      "73901": null,
                      "74740": null,
                      "74901": null,
                      "77719": null,
                      "77896": null,
                      "78785": null,
                      "78917": null,
                      "79238": null,
                      "79345": null,
                      "79390": null,
                      "79689": null,
                      "79731": null,
                      "79881": null,
                      "80274": null,
                      "84479": null,
                      "85829": null,
                      "88095": null,
                      "88200": null,
                      "89983": null,
                      "91258": null,
                      "91574": null,
                      "93308": [
                        {
                          "pharmacy_id": 1,
                          "selling_price": 150
                        }
                      ],
                      "95091": null,
                      "96335": null,
                      "97348": null,
                      "98042": null,
                      "98437": null,
                      "98579": null,
                      "119632": null,
                      "121310": null,
                      "122759": null,
                      "122992": null,
                      "123433": null,
                      "123729": null,
                      "133391": null,
                      "133418": null,
                      "141163": null,
                      "141644": null,
                      "143881": null,
                      "145570": null,
                      "145829": null,
                      "145832": null,
                      "148427": null,
                      "150078": null,
                      "150079": null,
                      "150651": null,
                      "150881": null,
                      "151681": null,
                      "151782": null,
                      "152805": null,
                      "153153": null,
                      "154143": null,
                      "154362": null,
                      "154461": null,
                      "155034": null,
                      "155078": null,
                      "155124": null,
                      "155604": null,
                      "155750": [
                        {
                          "pharmacy_id": 3,
                          "selling_price": 105
                        },
                        {
                          "pharmacy_id": 2,
                          "selling_price": 100
                        }
                      ],
                      "155816": null,
                      "155880": null,
                      "156047": null,
                      "156091": null,
                      "156190": null,
                      "156245": null,
                      "156301": null,
                      "156672": [
                        {
                          "pharmacy_id": 1,
                          "selling_price": 100
                        }
                      ],
                      "156800": null,
                      "156860": null,
                      "157011": null,
                      "157213": null,
                      "157369": null,
                      "157383": null,
                      "157457": null,
                      "157532": null,
                      "157619": null,
                      "157627": null,
                      "157698": [
                        {
                          "pharmacy_id": 2,
                          "selling_price": 150
                        }
                      ],
                      "157785": null,
                      "157875": null,
                      "158149": null,
                      "158227": null,
                      "158319": null,
                      "158405": null,
                      "158506": null,
                      "158508": null,
                      "158616": null,
                      "158728": [
                        {
                          "pharmacy_id": 3,
                          "selling_price": 80
                        }
                      ],
                      "158816": null,
                      "158819": null,
                      "159009": null,
                      "159091": null,
                      "159101": null,
                      "159189": null,
                      "159289": null,
                      "159385": null,
                      "159589": null,
                      "159682": null,
                      "159684": null,
                      "159685": null,
                      "159687": null,
                      "159691": null,
                      "159692": null,
                      "159799": null,
                      "159811": null,
                      "159812": null,
                      "159924": null,
                      "160129": null,
                      "160138": null,
                      "160146": null,
                      "160363": null,
                      "160453": null,
                      "160579": null,
                      "160717": null,
                      "160944": null,
                      "161042": null,
                      "161052": null,
                      "161056": null,
                      "161533": null,
                      "161537": null,
                      "166246": null,
                      "167385": null,
                      "170480": null,
                      "170719": null,
                      "171211": null,
                      "173782": null,
                      "174475": null,
                      "176005": null,
                      "178682": null,
                      "180842": null,
                      "181213": null,
                      "184129": null,
                      "184308": null,
                      "189127": null,
                      "190224": null,
                      "192992": null,
                      "213175": null,
                      "213513": null,
                      "213651": null,
                      "213703": null,
                      "216869": null,
                      "218535": null,
                      "218662": null,
                      "218722": [
                        {
                          "pharmacy_id": 3,
                          "selling_price": 150
                        }
                      ],
                      "218922": null,
                      "219703": null,
                      "223717": null,
                      "224057": null,
                      "224462": null,
                      "225334": null
                    },
                    "30 ml": {
                      "156669": null,
                      "162162": null,
                      "179274": null
                    },
                    "100 ml": {
                      "15333": null,
                      "153112": null
                    },
                    "60 oral suspensions": {
                      "161055": null
                    }
                  },
                  "100mg": {
                    "60 ml": {
                      "14632": null,
                      "26295": null,
                      "79639": null
                    },
                    "15 ml": {
                      "134027": null
                    },
                    "100 ml": {
                      "75883": null
                    }
                  },
                  "650mg": {
                    "60 ml": {
                      "14209": null,
                      "15949": null,
                      "139499": null,
                      "144394": null,
                      "154554": null
                    }
                  },
                  "125mg": {
                    "60 ml": {
                      "9098": null,
                      "14799": null,
                      "17135": null,
                      "20053": null,
                      "20233": null,
                      "34260": null,
                      "36596": null,
                      "59886": null,
                      "75174": null,
                      "75921": null,
                      "76120": null,
                      "77005": null,
                      "77792": null,
                      "78058": null,
                      "78137": null,
                      "79642": null,
                      "79940": null,
                      "80185": null,
                      "86442": null,
                      "89607": null,
                      "90283": null,
                      "91103": null,
                      "96172": null,
                      "123881": null,
                      "133973": null,
                      "152352": null,
                      "152370": null,
                      "153217": null,
                      "153346": null,
                      "153403": null,
                      "153404": null,
                      "154675": null,
                      "155168": null,
                      "155404": null,
                      "155513": null,
                      "155603": null,
                      "155749": null,
                      "156866": null,
                      "156932": null,
                      "157147": null,
                      "157530": null,
                      "157984": null,
                      "158145": null,
                      "158150": null,
                      "158619": null,
                      "158620": null,
                      "159505": null,
                      "159580": null,
                      "159921": null,
                      "160133": null,
                      "160264": null,
                      "160596": null,
                      "169546": null,
                      "171410": null,
                      "173034": null,
                      "176121": null,
                      "184999": null,
                      "186567": null,
                      "199626": null,
                      "216429": null,
                      "224780": null,
                      "225464": null
                    },
                    "100 ml": {
                      "14148": null
                    },
                    "30 ml": {
                      "185962": null,
                      "198941": null
                    },
                    "15 ml": {
                      "58243": null,
                      "147856": null
                    },
                    "50 ml": {
                      "159897": null
                    }
                  },
                  "156.25mg/5ml": {
                    "60 ml": {
                      "52588": null,
                      "115975": null,
                      "198897": null
                    }
                  },
                  "500mg": {
                    "60 ml": {
                      "77649": null,
                      "99460": null,
                      "148023": null,
                      "223067": null
                    }
                  },
                  "150mg": {
                    "60 ml": {
                      "118950": null,
                      "121378": null,
                      "140377": null
                    },
                    "15 ml": {
                      "113672": null,
                      "149616": null,
                      "150276": null
                    }
                  },
                  "120mg": {
                    "60 ml": {
                      "13090": null,
                      "76579": null,
                      "134425": null,
                      "147874": null,
                      "154142": null,
                      "155881": null,
                      "172355": null,
                      "177283": null
                    }
                  },
                  "100mg/5ml": {
                    "15 ml": {
                      "179872": null
                    }
                  },
                  "150mg/ml": {
                    "60 ml": {
                      "29138": null
                    }
                  },
                  "250mg/ml": {
                    "60 ml": {
                      "13191": null
                    }
                  },
                  "120mg/ml": {
                    "60 ml": {
                      "5067": null
                    }
                  }
                },
                "Tablet": {
                  "500mg": {
                    "10 tablets": {
                      "756": null,
                      "1405": null,
                      "2142": null,
                      "2881": null,
                      "3106": null,
                      "3229": null,
                      "3405": null,
                      "3992": null,
                      "4740": null,
                      "5069": null,
                      "6332": null,
                      "7993": null,
                      "8527": null,
                      "8884": null,
                      "9123": null,
                      "10385": null,
                      "12530": null,
                      "13065": null,
                      "17532": null,
                      "17542": null,
                      "18535": null,
                      "24359": null,
                      "25024": null,
                      "26243": null,
                      "28230": null,
                      "30561": null,
                      "32286": null,
                      "33522": null,
                      "33549": null,
                      "35092": null,
                      "35158": null,
                      "35272": null,
                      "35477": null,
                      "35820": null,
                      "37059": null,
                      "37162": null,
                      "40071": null,
                      "40350": null,
                      "44325": null,
                      "47837": null,
                      "49993": null,
                      "50283": null,
                      "50999": null,
                      "51491": null,
                      "52169": null,
                      "52246": null,
                      "54001": null,
                      "54219": null,
                      "58474": null,
                      "59362": null,
                      "60855": null,
                      "72893": null,
                      "72985": null,
                      "73697": null,
                      "73923": null,
                      "75271": null,
                      "76324": null,
                      "76650": null,
                      "76686": null,
                      "77318": null,
                      "77549": null,
                      "78064": null,
                      "78096": null,
                      "78141": null,
                      "78582": null,
                      "79585": null,
                      "81958": null,
                      "82289": null,
                      "82642": null,
                      "83505": null,
                      "85153": null,
                      "88291": null,
                      "91532": null,
                      "92386": null,
                      "92849": null,
                      "93654": null,
                      "97342": null,
                      "99204": null,
                      "112101": null,
                      "112252": null,
                      "112335": null,
                      "113236": null,
                      "113733": null,
                      "113848": null,
                      "114755": null,
                      "116573": null,
                      "117196": null,
                      "117943": null,
                      "119244": null,
                      "119247": null,
                      "121542": null,
                      "134766": null,
                      "138344": null,
                      "147327": null,
                      "147555": null,
                      "148089": null,
                      "148395": null,
                      "148657": null,
                      "148819": null,
                      "148828": null,
                      "148903": null,
                      "149077": null,
                      "149105": null,
                      "149206": null,
                      "149362": null,
                      "149374": null,
                      "149686": null,
                      "149906": null,
                      "149956": null,
                      "149992": null,
                      "150172": null,
                      "150241": null,
                      "150286": null,
                      "150305": null,
                      "150414": null,
                      "150475": null,
                      "150579": null,
                      "150661": null,
                      "150875": null,
                      "151046": null,
                      "151050": null,
                      "151227": null,
                      "151243": null,
                      "151758": null,
                      "151841": null,
                      "152307": null,
                      "152400": null,
                      "152649": null,
                      "152752": null,
                      "152975": null,
                      "153007": null,
                      "153735": null,
                      "154555": null,
                      "154634": null,
                      "154721": null,
                      "154764": null,
                      "154865": null,
                      "154874": null,
                      "155119": null,
                      "155225": null,
                      "155621": null,
                      "155643": null,
                      "155830": null,
                      "155914": null,
                      "156177": null,
                      "156192": null,
                      "156204": null,
                      "156529": null,
                      "156545": null,
                      "156554": null,
                      "156814": null,
                      "158170": null,
                      "158359": null,
                      "158563": null,
                      "158986": null,
                      "160243": null,
                      "161416": null,
                      "164366": null,
                      "164385": null,
                      "169715": null,
                      "171579": null,
                      "172658": null,
                      "172811": null,
                      "173607": null,
                      "177833": null,
                      "178768": null,
                      "181184": null,
                      "181616": null,
                      "181823": null,
                      "182632": null,
                      "184627": null,
                      "184892": null,
                      "186742": null,
                      "186828": null,
                      "191378": null,
                      "192272": null,
                      "192729": null,
                      "194365": null,
                      "195099": null,
                      "195570": null,
                      "197362": null,
                      "199099": null,
                      "199125": null,
                      "199792": null,
                      "213257": null,
                      "215312": null,
                      "216393": null,
                      "217525": null,
                      "217573": null,
                      "217761": null,
                      "218278": null,
                      "218346": null,
                      "218519": null,
                      "219311": null
                    },
                    "15 tablets": {
                      "1363": null,
                      "2318": null,
                      "23071": null,
                      "29772": null,
                      "29829": null,
                      "35628": null,
                      "38978": null,
                      "49363": null,
                      "72583": null,
                      "72839": null,
                      "111982": null,
                      "119947": null,
                      "147521": null,
                      "147543": null,
                      "147567": null,
                      "147969": null,
                      "148710": null,
                      "148912": null,
                      "154253": null,
                      "155965": null,
                      "158257": null
                    },
                    "10 tablet dt": {
                      "4055": null,
                      "55761": null,
                      "149106": null,
                      "153390": null
                    },
                    "50 tablets": {
                      "75982": null
                    },
                    "1000 tablets": {
                      "34948": null,
                      "112367": null,
                      "115473": null,
                      "147417": null
                    },
                    "10 tablet mr": {
                      "197735": null
                    },
                    "16 tablets": {
                      "217451": null
                    },
                    "6 tablets": {
                      "149751": null
                    },
                    "2 tablets": {
                      "14114": null
                    }
                  },
                  "650mg": {
                    "10 tablets": {
                      "1256": null,
                      "1273": null,
                      "1441": null,
                      "2704": null,
                      "2813": null,
                      "3118": null,
                      "4105": null,
                      "4355": null,
                      "4527": null,
                      "5018": null,
                      "5074": null,
                      "6077": null,
                      "7092": null,
                      "7725": null,
                      "7864": null,
                      "8208": null,
                      "8829": null,
                      "8855": null,
                      "9061": null,
                      "9073": null,
                      "9122": null,
                      "9475": null,
                      "9493": null,
                      "10365": null,
                      "10768": null,
                      "11520": null,
                      "14640": null,
                      "15027": null,
                      "15040": null,
                      "16931": null,
                      "17221": null,
                      "17531": null,
                      "17535": null,
                      "17848": null,
                      "17853": null,
                      "19638": null,
                      "24795": null,
                      "25249": null,
                      "26830": null,
                      "27458": null,
                      "27903": null,
                      "28115": null,
                      "30484": null,
                      "30600": null,
                      "32366": null,
                      "32620": null,
                      "33454": null,
                      "33579": null,
                      "34630": null,
                      "35602": null,
                      "35796": null,
                      "36669": null,
                      "37654": null,
                      "39079": null,
                      "39892": null,
                      "40718": null,
                      "41295": null,
                      "41399": null,
                      "42741": null,
                      "44102": null,
                      "44180": null,
                      "44251": null,
                      "44638": null,
                      "45866": null,
                      "46149": null,
                      "47184": null,
                      "50474": null,
                      "53051": null,
                      "53239": null,
                      "53501": null,
                      "53797": null,
                      "54282": null,
                      "54382": null,
                      "54756": null,
                      "55089": null,
                      "55605": null,
                      "56031": null,
                      "57062": null,
                      "57401": null,
                      "57776": null,
                      "58845": null,
                      "58987": null,
                      "59557": null,
                      "59664": null,
                      "59697": null,
                      "60865": null,
                      "72959": null,
                      "73216": null,
                      "73246": null,
                      "73436": null,
                      "73453": null,
                      "73487": null,
                      "75277": null,
                      "75398": null,
                      "75436": null,
                      "76095": null,
                      "76419": null,
                      "76711": null,
                      "78018": null,
                      "78076": null,
                      "78140": null,
                      "78396": null,
                      "78441": null,
                      "78451": null,
                      "79003": null,
                      "79326": null,
                      "80005": null,
                      "80258": null,
                      "81981": null,
                      "82646": null,
                      "82809": null,
                      "85053": null,
                      "85996": null,
                      "86245": null,
                      "87428": null,
                      "88143": null,
                      "89892": null,
                      "89924": null,
                      "90614": null,
                      "91136": null,
                      "93504": null,
                      "94401": null,
                      "95828": null,
                      "95847": null,
                      "98076": null,
                      "98245": null,
                      "99240": null,
                      "99687": null,
                      "112208": null,
                      "112214": null,
                      "112348": null,
                      "113776": null,
                      "115355": null,
                      "116195": null,
                      "116478": null,
                      "116498": null,
                      "117358": null,
                      "118077": null,
                      "118194": null,
                      "118750": null,
                      "118816": null,
                      "119795": null,
                      "119868": null,
                      "119937": null,
                      "120706": null,
                      "120802": null,
                      "121081": null,
                      "121123": null,
                      "121125": null,
                      "121194": null,
                      "121958": null,
                      "122955": null,
                      "123163": null,
                      "123172": null,
                      "124594": null,
                      "127430": null,
                      "127963": null,
                      "128929": null,
                      "130222": null,
                      "131193": null,
                      "132181": null,
                      "132353": null,
                      "132833": null,
                      "133098": null,
                      "133244": null,
                      "134079": null,
                      "134210": null,
                      "134629": null,
                      "135654": null,
                      "138712": null,
                      "138891": null,
                      "138916": null,
                      "138943": null,
                      "140906": null,
                      "141285": null,
                      "142949": null,
                      "143789": null,
                      "143979": null,
                      "145140": null,
                      "145190": null,
                      "147403": null,
                      "147431": null,
                      "147439": null,
                      "147909": null,
                      "148038": null,
                      "148272": null,
                      "148390": null,
                      "148734": null,
                      "148833": null,
                      "148919": null,
                      "148964": null,
                      "148969": null,
                      "149395": null,
                      "149412": null,
                      "149745": null,
                      "149752": null,
                      "149783": null,
                      "149877": null,
                      "149932": null,
                      "149970": null,
                      "149986": null,
                      "150019": null,
                      "150041": null,
                      "150104": null,
                      "150107": null,
                      "150225": null,
                      "150360": null,
                      "150391": null,
                      "150404": null,
                      "150410": null,
                      "150429": null,
                      "150619": null,
                      "150628": null,
                      "150933": null,
                      "151012": null,
                      "151016": null,
                      "151045": null,
                      "151061": null,
                      "151065": null,
                      "151074": null,
                      "151173": null,
                      "151250": null,
                      "151322": null,
                      "151364": null,
                      "151419": null,
                      "151619": null,
                      "151689": null,
                      "151749": null,
                      "151765": null,
                      "151857": null,
                      "151861": null,
                      "151888": null,
                      "152016": null,
                      "152058": null,
                      "152076": null,
                      "152079": null,
                      "152456": null,
                      "152496": null,
                      "152769": null,
                      "152855": null,
                      "152964": null,
                      "153012": null,
                      "153015": null,
                      "153031": null,
                      "153105": null,
                      "153207": null,
                      "153214": null,
                      "153231": null,
                      "153355": null,
                      "153458": null,
                      "153550": null,
                      "153557": null,
                      "153697": null,
                      "153724": null,
                      "153729": null,
                      "153768": null,
                      "153923": null,
                      "154036": null,
                      "154040": null,
                      "154077": null,
                      "154259": null,
                      "154350": null,
                      "154468": null,
                      "154478": null,
                      "154499": null,
                      "154616": null,
                      "154655": null,
                      "154779": null,
                      "154843": null,
                      "154868": null,
                      "155114": null,
                      "155297": null,
                      "155324": null,
                      "155339": null,
                      "155432": null,
                      "155487": null,
                      "155499": null,
                      "155542": null,
                      "155575": null,
                      "155582": null,
                      "155663": null,
                      "155789": null,
                      "155801": null,
                      "155822": null,
                      "155837": null,
                      "155849": null,
                      "155865": null,
                      "155902": null,
                      "155910": null,
                      "155942": null,
                      "156027": null,
                      "156179": null,
                      "156222": null,
                      "156285": null,
                      "156287": null,
                      "156336": null,
                      "156349": null,
                      "156393": null,
                      "156401": null,
                      "156418": null,
                      "156467": null,
                      "156471": null,
                      "156479": null,
                      "156518": null,
                      "156526": null,
                      "156538": null,
                      "156645": null,
                      "156652": null,
                      "156689": null,
                      "156837": null,
                      "156844": null,
                      "156854": null,
                      "156889": null,
                      "156894": null,
                      "156909": null,
                      "156968": null,
                      "156971": null,
                      "156981": null,
                      "157179": null,
                      "157247": null,
                      "157263": null,
                      "157373": null,
                      "157423": null,
                      "157436": null,
                      "157508": null,
                      "157576": null,
                      "157600": null,
                      "157740": null,
                      "157817": null,
                      "157827": null,
                      "157920": null,
                      "157950": null,
                      "157962": null,
                      "158040": null,
                      "158169": null,
                      "158384": null,
                      "158604": null,
                      "158660": null,
                      "158757": null,
                      "158959": null,
                      "158990": null,
                      "159159": null,
                      "159336": null,
                      "159478": null,
                      "159544": null,
                      "159570": null,
                      "159574": null,
                      "159638": null,
                      "159676": null,
                      "159751": null,
                      "159778": null,
                      "159943": null,
                      "159988": null,
                      "160301": null,
                      "161583": null,
                      "161826": null,
                      "162333": null,
                      "163607": null,
                      "165688": null,
                      "166307": null,
                      "166852": null,
                      "167898": null,
                      "168157": null,
                      "168424": null,
                      "169166": null,
                      "169368": null,
                      "170687": null,
                      "170833": null,
                      "170858": null,
                      "171842": null,
                      "171977": null,
                      "172812": null,
                      "174193": null,
                      "174476": null,
                      "174523": null,
                      "176126": null,
                      "179704": null,
                      "179808": null,
                      "179889": null,
                      "180780": null,
                      "181333": null,
                      "181334": null,
                      "181360": null,
                      "181656": null,
                      "183941": null,
                      "183989": null,
                      "184341": null,
                      "184575": null,
                      "185292": null,
                      "185561": null,
                      "186118": null,
                      "186897": null,
                      "187067": null,
                      "188485": null,
                      "192354": null,
                      "192929": null,
                      "193632": null,
                      "193820": null,
                      "194143": null,
                      "194334": null,
                      "194652": null,
                      "195136": null,
                      "195406": null,
                      "196167": null,
                      "196781": null,
                      "197325": null,
                      "197479": null,
                      "197606": null,
                      "197795": null,
                      "197896": null,
                      "197913": null,
                      "198647": null,
                      "198935": null,
                      "199604": null,
                      "199994": null,
                      "210508": null,
                      "211824": null,
                      "212226": null,
                      "212250": null,
                      "213547": null,
                      "213699": null,
                      "215300": null,
                      "215602": null,
                      "216140": null,
                      "216475": null,
                      "217389": null,
                      "217508": null,
                      "217511": null,
                      "218409": null,
                      "219352": null,
                      "219444": null,
                      "219576": null,
                      "221429": null,
                      "223337": null,
                      "223737": null,
                      "223987": null,
                      "224034": null
                    },
                    "10 tablet dt": {
                      "4472": null,
                      "6906": null,
                      "44249": null,
                      "53284": null,
                      "75579": null,
                      "75987": null,
                      "77365": null,
                      "91071": null,
                      "113450": null,
                      "140722": null,
                      "141885": null,
                      "152459": null,
                      "155546": null,
                      "158488": null,
                      "159326": null,
                      "189966": null,
                      "212031": null,
                      "215900": null
                    },
                    "15 tablets": {
                      "9115": null,
                      "9459": null,
                      "9674": null,
                      "16644": null,
                      "20083": null,
                      "24355": null,
                      "29793": null,
                      "32837": null,
                      "33765": null,
                      "34231": null,
                      "46909": null,
                      "49222": null,
                      "49436": null,
                      "56594": null,
                      "58887": null,
                      "72617": null,
                      "74971": null,
                      "76655": null,
                      "79578": null,
                      "83201": null,
                      "83321": null,
                      "84743": null,
                      "90031": null,
                      "90655": null,
                      "96062": null,
                      "97338": null,
                      "116761": null,
                      "121290": null,
                      "130512": null,
                      "131704": null,
                      "145693": null,
                      "147501": null,
                      "148109": null,
                      "148200": null,
                      "148600": null,
                      "151890": null,
                      "152870": null,
                      "154076": null,
                      "154916": null,
                      "155911": null,
                      "156395": null,
                      "156474": null,
                      "158138": null,
                      "165548": null,
                      "174485": null,
                      "174900": null,
                      "177130": null,
                      "221679": null
                    },
                    "6 tablets": {
                      "50850": null,
                      "151731": null
                    },
                    "15 tablet dt": {
                      "90046": null,
                      "180419": null
                    },
                    "10 tablet er": {
                      "41266": null,
                      "53417": null,
                      "77332": null,
                      "94489": null,
                      "149814": null,
                      "150551": null,
                      "217648": null
                    },
                    "10 Tablet DR": {
                      "193385": null
                    },
                    "5 tablets": {
                      "195006": null
                    },
                    "15 tablet ir": {
                      "155398": null
                    },
                    "4 tablets": {
                      "151547": null
                    }
                  },
                  "1000mg": {
                    "10 tablets": {
                      "1068": null,
                      "1512": null,
                      "2902": null,
                      "3289": null,
                      "7476": null,
                      "31524": [
                        {
                          "pharmacy_id": 2,
                          "selling_price": 150
                        }
                      ],
                      "50931": null,
                      "75802": null,
                      "81946": null,
                      "95013": null,
                      "134993": null,
                      "137323": null,
                      "147413": null,
                      "147978": null,
                      "148153": null,
                      "149428": null,
                      "149664": null,
                      "150725": null,
                      "153488": null,
                      "154844": null,
                      "217411": null
                    },
                    "10 tablet sr": {
                      "57229": null,
                      "150393": null,
                      "155103": null
                    },
                    "10 tablet er": {
                      "28830": null
                    },
                    "1 Tablet": {
                      "31362": null
                    },
                    "15 tablets": {
                      "142201": null
                    },
                    "6 tablets": {
                      "151811": null
                    },
                    "6 tablet xr": {
                      "153328": null
                    }
                  },
                  "125mg": {
                    "10 tablets": {
                      "1393": null,
                      "6142": null,
                      "78742": null,
                      "118994": null,
                      "119982": null,
                      "132679": null,
                      "149602": null,
                      "152068": null,
                      "155748": null,
                      "188097": null
                    },
                    "10 tablet dt": {
                      "32365": null,
                      "148543": null,
                      "183672": null
                    }
                  },
                  "250mg": {
                    "10 tablets": {
                      "4084": null,
                      "115957": null,
                      "117767": null,
                      "156189": null,
                      "169880": null
                    },
                    "15 tablets": {
                      "31601": null
                    },
                    "10 tablet dt": {
                      "3588": null,
                      "147751": null
                    }
                  },
                  "300mg": {
                    "10 tablets": {
                      "50659": null,
                      "54776": null,
                      "115683": null,
                      "224228": null
                    },
                    "15 tablet dt": {
                      "112621": null
                    },
                    "10 tablet dt": {
                      "193300": null
                    }
                  },
                  "120mg": {
                    "10 disintegrating strips": {
                      "120404": null
                    }
                  },
                  "60mg": {
                    "10 disintegrating strips": {
                      "119041": null
                    }
                  },
                  "325mg": {
                    "10 tablets": {
                      "148122": null,
                      "211846": null
                    }
                  },
                  "750mg": {
                    "10 tablets": {
                      "148143": null
                    }
                  },
                  "50mg": {
                    "10 tablets": {
                      "148617": null
                    }
                  }
                },
                "Miscellaneous": {
                  "1000mg": {
                    "100 ml": {
                      "2285": null,
                      "3752": null,
                      "8285": null,
                      "8478": null,
                      "10082": null,
                      "15099": null,
                      "18703": null,
                      "18709": null,
                      "27639": null,
                      "28720": null,
                      "40260": [
                        {
                          "pharmacy_id": 1,
                          "selling_price": 100
                        }
                      ],
                      "44350": null,
                      "50635": null,
                      "54087": null,
                      "58072": null,
                      "59093": null,
                      "73301": null,
                      "73503": null,
                      "73919": null,
                      "75835": null,
                      "76056": null,
                      "86783": null,
                      "88545": null,
                      "89587": null,
                      "92756": null,
                      "93573": null,
                      "93914": null,
                      "94924": null,
                      "95211": null,
                      "99123": null,
                      "112999": null,
                      "115586": null,
                      "116865": null,
                      "120220": null,
                      "121800": null,
                      "123556": null,
                      "126938": null,
                      "139566": null,
                      "141417": null,
                      "141573": null,
                      "145212": null,
                      "147721": null,
                      "147738": null,
                      "147987": null,
                      "148410": null,
                      "148479": null,
                      "148860": null,
                      "149370": null,
                      "149508": null,
                      "149717": null,
                      "149720": null,
                      "150515": null,
                      "150930": null,
                      "151397": null,
                      "151398": null,
                      "151736": null,
                      "152134": null,
                      "153653": null,
                      "153847": null,
                      "155369": null,
                      "155705": null,
                      "155967": null,
                      "156061": null,
                      "156219": null,
                      "157406": null,
                      "157487": null,
                      "157831": null,
                      "157945": null,
                      "158278": null,
                      "158461": null,
                      "158555": null,
                      "158689": null,
                      "158708": null,
                      "158977": null,
                      "158995": null,
                      "159247": null,
                      "159358": null,
                      "159888": null,
                      "160547": null,
                      "161105": null,
                      "161404": null,
                      "162676": null,
                      "177188": null,
                      "183988": null,
                      "184490": null,
                      "187918": null,
                      "188280": null,
                      "192211": null,
                      "192788": null,
                      "194695": null,
                      "195892": null,
                      "196027": null,
                      "198202": null,
                      "210185": null,
                      "214976": null,
                      "216188": null,
                      "217597": null,
                      "219569": null,
                      "224750": null,
                      "225187": null
                    },
                    "1 Infusion": {
                      "160514": null
                    }
                  },
                  "170mg": {
                    "5 suppositories": {
                      "1736": null,
                      "98413": null,
                      "116258": null,
                      "126776": null,
                      "148944": null,
                      "165195": null,
                      "177841": null
                    }
                  },
                  "250mg": {
                    "5 suppositories": {
                      "3872": null,
                      "116260": null,
                      "127118": null,
                      "165742": null,
                      "178222": null
                    },
                    "100 ml": {
                      "127538": null
                    },
                    "60 ml": {
                      "160726": null
                    }
                  },
                  "80mg": {
                    "5 suppositories": {
                      "1196": null,
                      "98196": null,
                      "114733": null,
                      "126761": null,
                      "152932": null,
                      "166169": null,
                      "178194": null
                    }
                  },
                  "100mg": {
                    "100 ml": {
                      "9533": null,
                      "94509": null,
                      "129756": null
                    }
                  },
                  "500mg": {
                    "50 ml": {
                      "99616": null
                    },
                    "100 ml": {
                      "36056": null
                    },
                    "10 caplets": {
                      "23970": null
                    }
                  },
                  "1000mg/100ml": {
                    "100 ml": {
                      "113996": null,
                      "151830": null
                    },
                    "1 Infusion": {
                      "39934": null
                    }
                  },
                  "125mg": {
                    "60 ml": {
                      "116164": null
                    },
                    "5 suppositories": {
                      "164594": null
                    }
                  },
                  "10mg/ml": {
                    "100 ml": {
                      "73356": null,
                      "129247": null
                    }
                  },
                  "1% w/v": {
                    "100 ml": {
                      "170441": null
                    }
                  },
                  "1gm": {
                    "100 ml": {
                      "156171": null,
                      "167887": null
                    }
                  },
                  "150mg": {
                    "15 ml": {
                      "147934": null
                    }
                  }
                },
                "Drops": {
                  "125mg": {
                    "15 ml": {
                      "12991": null,
                      "14876": null,
                      "149836": null,
                      "154500": null,
                      "156484": null,
                      "157078": null,
                      "160591": null
                    },
                    "10 ml": {
                      "183178": null
                    }
                  },
                  "150mg": {
                    "15 ml": {
                      "15407": null,
                      "20464": null,
                      "37264": null,
                      "73873": null,
                      "74068": null,
                      "74483": null,
                      "77884": null,
                      "79655": null,
                      "91206": null,
                      "96266": null,
                      "117422": null,
                      "139311": null,
                      "143687": null,
                      "197733": null
                    },
                    "10 ml": {
                      "168805": null
                    }
                  },
                  "100mg/ml": {
                    "10 ml": {
                      "24899": null
                    },
                    "15 ml": {
                      "11611": null,
                      "72886": null,
                      "73018": null,
                      "79711": null,
                      "93159": null,
                      "112935": null,
                      "149041": null,
                      "149354": null,
                      "154715": null,
                      "216043": null
                    },
                    "30 ml": {
                      "74058": null
                    }
                  },
                  "100mg": {
                    "15 ml": {
                      "47907": null,
                      "61051": null,
                      "74795": null,
                      "77761": null,
                      "79936": null,
                      "79966": null,
                      "90248": null,
                      "123091": null,
                      "133060": null,
                      "133072": null,
                      "148364": null,
                      "156724": null,
                      "157150": null,
                      "157626": null,
                      "158228": null,
                      "219448": null
                    }
                  },
                  "650mg": {
                    "15 ml": {
                      "197870": null
                    }
                  },
                  "150mg/5ml": {
                    "15 ml": {
                      "73460": null
                    }
                  },
                  "100mg/5ml": {
                    "15 ml": {
                      "153919": null,
                      "154135": null,
                      "158276": null,
                      "161215": null
                    }
                  },
                  "125mg/ml": {
                    "15 ml": {
                      "152833": null
                    }
                  }
                },
                "Injection": {
                  "150mg": {
                    "2 ml": {
                      "25270": null,
                      "72533": null,
                      "74107": null,
                      "114168": null,
                      "126735": null,
                      "147514": null,
                      "150365": null,
                      "169252": null
                    },
                    "30 ml": {
                      "156841": null
                    },
                    "15 ml": {
                      "2195": null,
                      "72504": null
                    },
                    "1 ml": {
                      "154814": null
                    },
                    "10 ml": {
                      "159720": null
                    }
                  },
                  "500mg": {
                    "2 ml": {
                      "52684": null,
                      "150288": null
                    }
                  },
                  "1000mg": {
                    "100 ml": {
                      "83235": null,
                      "92649": null,
                      "93867": null,
                      "117211": null,
                      "121422": null,
                      "147922": null,
                      "152190": null,
                      "152984": null,
                      "156209": null,
                      "156585": null
                    },
                    "1 Injection": {
                      "73898": null
                    },
                    "2 ml": {
                      "151372": null
                    }
                  },
                  "1000mg/100ml": {
                    "100 ml": {
                      "94436": null
                    },
                    "1 Injection": {
                      "48227": null
                    }
                  },
                  "75mg/ml": {
                    "2 ml": {
                      "73864": null,
                      "114376": null,
                      "154880": null
                    },
                    "30 ml": {
                      "29054": null,
                      "37348": null,
                      "155243": null,
                      "157917": null,
                      "159031": null
                    }
                  },
                  "150mg/ml": {
                    "2 ml": {
                      "151573": null,
                      "154234": null
                    },
                    "15 ml": {
                      "155008": null
                    }
                  },
                  "100mg": {
                    "100 ml": {
                      "53277": null
                    }
                  }
                },
                "Capsule": {
                  "500mg": {
                    "10 capsules": {
                      "154222": null
                    }
                  }
                }
              }
            },
            {
              "id": 3055,
              "salt": "Paracetamol+Pamabrom",
              "salt_frequency": 2,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "325mg+25mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "325mg+25mg": {
                    "10 tablets": {
                      "152812": null,
                      "154811": null
                    }
                  }
                }
              }
            },
            {
              "id": 1927,
              "salt": "Paracetamol+Codeine",
              "salt_frequency": 10,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "650mg+30mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "650mg+30mg": {
                    "10 tablets": {
                      "33352": null,
                      "40517": null,
                      "53691": null,
                      "126653": null,
                      "137112": null,
                      "151980": null
                    },
                    "6 tablets": {
                      "148996": null
                    }
                  },
                  "500mg+10mg": {
                    "10 tablets": {
                      "36549": null,
                      "37852": null,
                      "51507": null
                    }
                  }
                }
              }
            },
            {
              "id": 2916,
              "salt": "Nefopam+Paracetamol",
              "salt_frequency": 1,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "30mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "30mg+325mg": {
                    "10 tablets": {
                      "126510": null
                    }
                  }
                }
              }
            },
            {
              "id": 471,
              "salt": "Caffeine+Paracetamol",
              "salt_frequency": 27,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "50mg+650mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "50mg+500mg": {
                    "10 tablets": {
                      "248": null,
                      "1921": null,
                      "177292": null
                    }
                  },
                  "30mg+500mg": {
                    "10 tablets": {
                      "27574": null,
                      "30470": null,
                      "154451": null,
                      "154641": null,
                      "192046": null
                    }
                  },
                  "50mg+650mg": {
                    "15 tablets": {
                      "29891": null
                    },
                    "10 tablets": {
                      "4734": null,
                      "8580": null,
                      "28427": null,
                      "49500": null,
                      "54763": null,
                      "96511": null,
                      "114487": null,
                      "126690": null,
                      "147505": null,
                      "156631": null,
                      "157371": null,
                      "181060": null,
                      "212124": null
                    }
                  },
                  "25mg+325mg": {
                    "10 tablets": {
                      "50525": null,
                      "54731": null,
                      "185885": null
                    }
                  },
                  "25mg+500mg": {
                    "15 tablets": {
                      "49419": null
                    }
                  },
                  "30mg+650mg": {
                    "10 tablets": {
                      "154583": null
                    }
                  }
                }
              }
            },
            {
              "id": 321,
              "salt": "Tramadol+Paracetamol",
              "salt_frequency": 324,
              "available_forms": [
                "Tablet",
                "Capsule"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "37.5mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "37.5mg+325mg": {
                    "10 tablets": {
                      "3353": null,
                      "3860": null,
                      "4224": null,
                      "4637": null,
                      "5079": null,
                      "5326": null,
                      "5555": null,
                      "6323": null,
                      "6575": null,
                      "7909": null,
                      "8743": null,
                      "9870": null,
                      "10795": null,
                      "12653": null,
                      "14465": null,
                      "18248": null,
                      "20737": null,
                      "21201": null,
                      "22409": null,
                      "24266": null,
                      "24640": null,
                      "25108": null,
                      "26937": null,
                      "28057": null,
                      "29046": null,
                      "35762": null,
                      "39591": null,
                      "40215": null,
                      "41983": null,
                      "44681": null,
                      "46419": null,
                      "46437": null,
                      "48877": null,
                      "49621": null,
                      "50312": null,
                      "51529": null,
                      "52144": null,
                      "52878": null,
                      "53623": null,
                      "53841": null,
                      "54252": null,
                      "54501": null,
                      "54851": null,
                      "56035": null,
                      "56164": null,
                      "56912": null,
                      "56928": null,
                      "58081": null,
                      "58121": null,
                      "59624": null,
                      "59699": null,
                      "59899": null,
                      "60052": null,
                      "60688": null,
                      "60799": null,
                      "61971": null,
                      "62042": null,
                      "64238": null,
                      "68074": null,
                      "68336": null,
                      "68676": null,
                      "70336": null,
                      "75096": null,
                      "75719": null,
                      "76735": null,
                      "78265": null,
                      "78952": null,
                      "79068": null,
                      "79635": null,
                      "80354": null,
                      "83163": null,
                      "85221": null,
                      "87782": null,
                      "90282": null,
                      "91121": null,
                      "91689": null,
                      "93680": null,
                      "93928": null,
                      "93975": null,
                      "94360": null,
                      "95224": null,
                      "97145": null,
                      "97927": null,
                      "98682": null,
                      "98705": null,
                      "98745": null,
                      "98803": null,
                      "99723": null,
                      "99876": null,
                      "113560": null,
                      "113631": null,
                      "114377": null,
                      "117654": null,
                      "124264": null,
                      "128167": null,
                      "130000": null,
                      "130199": null,
                      "132397": null,
                      "133125": null,
                      "133172": null,
                      "133607": null,
                      "133624": null,
                      "135322": null,
                      "137557": null,
                      "140054": null,
                      "140142": null,
                      "140260": null,
                      "140893": null,
                      "141467": null,
                      "143735": null,
                      "143855": null,
                      "145243": null,
                      "145458": null,
                      "148225": null,
                      "149692": null,
                      "149705": null,
                      "152271": null,
                      "153132": null,
                      "153171": null,
                      "154608": null,
                      "156135": null,
                      "156237": null,
                      "156638": null,
                      "156892": null,
                      "157496": null,
                      "158448": null,
                      "159824": null,
                      "161482": null,
                      "165088": null,
                      "167626": null,
                      "170724": null,
                      "172889": null,
                      "174377": null,
                      "174814": null,
                      "175294": null,
                      "176707": null,
                      "178897": null,
                      "179120": null,
                      "179740": null,
                      "180313": null,
                      "180576": null,
                      "180633": null,
                      "180951": null,
                      "181508": null,
                      "181786": null,
                      "182095": null,
                      "182741": null,
                      "183325": null,
                      "186046": null,
                      "186611": null,
                      "186896": null,
                      "187328": null,
                      "187868": null,
                      "187884": null,
                      "188454": null,
                      "190805": null,
                      "192253": null,
                      "192564": null,
                      "192970": null,
                      "192973": null,
                      "193186": null,
                      "193380": null,
                      "193492": null,
                      "193521": null,
                      "193581": null,
                      "193697": null,
                      "194182": null,
                      "194592": null,
                      "194741": null,
                      "194826": null,
                      "195582": null,
                      "195821": null,
                      "196091": null,
                      "196292": null,
                      "196308": null,
                      "196421": null,
                      "196583": null,
                      "196606": null,
                      "196697": null,
                      "196783": null,
                      "196832": null,
                      "196860": null,
                      "197182": null,
                      "197388": null,
                      "197574": null,
                      "197679": null,
                      "197723": null,
                      "197966": null,
                      "197988": null,
                      "198207": null,
                      "198235": null,
                      "198259": null,
                      "198390": null,
                      "198393": null,
                      "198530": null,
                      "198714": null,
                      "198833": null,
                      "198996": null,
                      "199036": null,
                      "199089": null,
                      "199116": null,
                      "199136": null,
                      "199164": null,
                      "199173": null,
                      "199310": null,
                      "199340": null,
                      "199397": null,
                      "199480": null,
                      "199491": null,
                      "199542": null,
                      "199699": null,
                      "199760": null,
                      "199832": null,
                      "199875": null,
                      "199878": null,
                      "199939": null,
                      "199950": null,
                      "210235": null,
                      "210487": null,
                      "211438": null,
                      "212041": null,
                      "214305": null,
                      "215412": null,
                      "215454": null,
                      "215765": null,
                      "216276": null,
                      "216548": null,
                      "216651": null,
                      "217018": null,
                      "218603": null,
                      "218608": null,
                      "224952": null,
                      "225518": null
                    },
                    "15 tablets": {
                      "130377": null,
                      "147881": null,
                      "194619": null,
                      "196996": null,
                      "198271": null
                    }
                  },
                  "50mg+325mg": {
                    "10 tablets": {
                      "9055": null,
                      "12069": null,
                      "13105": null,
                      "15265": null,
                      "16986": null,
                      "17818": null,
                      "25173": null,
                      "37323": null,
                      "48075": null,
                      "50584": null,
                      "61745": null,
                      "78532": null,
                      "91758": null,
                      "94323": null,
                      "94842": null,
                      "115052": null,
                      "121995": null,
                      "131529": null,
                      "167201": null,
                      "179287": null,
                      "190385": null,
                      "191995": null,
                      "194309": null,
                      "194721": null,
                      "195353": null,
                      "195955": null,
                      "197869": null,
                      "198160": null,
                      "199783": null,
                      "199837": null,
                      "219647": null
                    },
                    "10 tablet dt": {
                      "53206": null
                    }
                  },
                  "50mg+500mg": {
                    "10 tablets": {
                      "6917": null,
                      "10901": null,
                      "15491": null,
                      "24405": null,
                      "32250": null,
                      "51518": null,
                      "52996": null,
                      "55271": null,
                      "55646": null,
                      "58660": null,
                      "65942": null,
                      "66104": null,
                      "67749": null,
                      "75126": null,
                      "90690": null,
                      "98029": null,
                      "117883": null,
                      "125628": null,
                      "134196": null,
                      "141485": null,
                      "143643": null,
                      "144574": null,
                      "144822": null,
                      "144920": null,
                      "147058": null,
                      "160868": null,
                      "162940": null,
                      "176539": null,
                      "189227": null,
                      "194297": null,
                      "197114": null,
                      "197178": null,
                      "197361": null,
                      "199858": null,
                      "212639": null
                    }
                  },
                  "37.5mg+500mg": {
                    "10 tablets": {
                      "20191": null,
                      "51751": null,
                      "151901": null,
                      "193488": null,
                      "193848": null,
                      "216795": null
                    }
                  },
                  "37.5mg+375mg": {
                    "10 tablets": {
                      "69912": null,
                      "175228": null,
                      "195154": null,
                      "223365": null
                    }
                  },
                  "37.5mcg+325mg": {
                    "10 tablets": {
                      "78628": null
                    }
                  },
                  "18.75mg+162.5mg": {
                    "10 tablets": {
                      "76068": null
                    },
                    "15 tablets": {
                      "10601": null
                    }
                  },
                  "37.5mg+350mg": {
                    "10 tablets": {
                      "97181": null
                    }
                  },
                  "n": {
                    "10 tablets": {
                      "129493": null,
                      "198405": null
                    }
                  },
                  "50mg+350mg": {
                    "10 tablets": {
                      "143473": null
                    }
                  }
                },
                "Capsule": {
                  "50mg+500mg": {
                    "10 capsules": {
                      "28048": null,
                      "42925": null
                    }
                  }
                }
              }
            },
            {
              "id": 44,
              "salt": "Etodolac+Paracetamol",
              "salt_frequency": 47,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "400mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "400mg+325mg": {
                    "10 tablets": {
                      "18103": null,
                      "51570": null,
                      "57411": null,
                      "60743": null,
                      "61873": null,
                      "64036": null,
                      "65113": null,
                      "65296": null,
                      "65666": null,
                      "65737": null,
                      "65993": null,
                      "66770": null,
                      "68051": null,
                      "69156": null,
                      "70930": null,
                      "71097": null,
                      "71693": null,
                      "72036": null,
                      "72219": null,
                      "77489": null,
                      "121330": null,
                      "123450": null,
                      "137635": null,
                      "138047": null,
                      "145280": null,
                      "157965": null,
                      "158832": null,
                      "182694": null,
                      "189675": null,
                      "194804": null,
                      "217129": null
                    },
                    "10 tablet er": {
                      "69446": null
                    }
                  },
                  "400mg+500mg": {
                    "10 tablets": {
                      "63813": null,
                      "64312": null,
                      "64521": null,
                      "64729": null,
                      "65326": null,
                      "71719": null,
                      "80717": null,
                      "145873": null
                    }
                  },
                  "300mg+325mg": {
                    "10 tablets": {
                      "20157": null,
                      "65576": null,
                      "66078": null,
                      "66680": null
                    }
                  },
                  "300mg+500mg": {
                    "10 tablets": {
                      "67316": null
                    }
                  },
                  "200mg+325mg": {
                    "10 tablets": {
                      "147438": null,
                      "177196": null
                    }
                  }
                }
              }
            },
            {
              "id": 2897,
              "salt": "Naproxen+Paracetamol",
              "salt_frequency": 1,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "300mg+500mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "300mg+500mg": {
                    "10 tablets": {
                      "127519": null
                    }
                  }
                }
              }
            },
            {
              "id": 75,
              "salt": "Ibuprofen+Paracetamol",
              "salt_frequency": 273,
              "available_forms": [
                "Tablet",
                "Oral Liquid",
                "Capsule"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "400mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "400mg+500mg": {
                    "10 tablets": {
                      "1181": null,
                      "5435": null,
                      "7620": null,
                      "8407": null,
                      "8495": null,
                      "8753": null,
                      "12089": null,
                      "12178": null,
                      "13131": null,
                      "20114": null,
                      "24454": null,
                      "25493": null,
                      "26813": null,
                      "27912": null,
                      "36153": null,
                      "61011": null,
                      "74059": null,
                      "78966": null,
                      "92212": null,
                      "92372": null,
                      "92643": null,
                      "93368": null,
                      "93460": null,
                      "93700": null,
                      "93945": null,
                      "94197": null,
                      "94490": null,
                      "94872": null,
                      "95639": null,
                      "96474": null,
                      "96479": null,
                      "114217": null,
                      "118957": null,
                      "148178": null,
                      "149727": null,
                      "155596": null,
                      "159582": null,
                      "164401": null,
                      "180998": null,
                      "193011": null,
                      "219625": null
                    },
                    "15 tablets": {
                      "49784": null,
                      "95797": null
                    },
                    "6 tablets": {
                      "218411": null
                    }
                  },
                  "400mg+325mg": {
                    "10 tablets": {
                      "1124": null,
                      "1767": null,
                      "7154": null,
                      "10447": null,
                      "14227": null,
                      "18783": null,
                      "22901": null,
                      "23223": null,
                      "23425": null,
                      "24006": null,
                      "24410": null,
                      "25080": null,
                      "25101": null,
                      "25257": null,
                      "25346": null,
                      "26182": null,
                      "26279": null,
                      "27164": null,
                      "27695": null,
                      "27893": null,
                      "27973": null,
                      "28524": null,
                      "28992": null,
                      "32465": null,
                      "34874": null,
                      "36722": null,
                      "39120": null,
                      "46611": null,
                      "48042": null,
                      "50275": null,
                      "52184": null,
                      "54943": null,
                      "55383": null,
                      "73179": null,
                      "76457": null,
                      "81003": null,
                      "85955": null,
                      "87534": null,
                      "89691": null,
                      "92482": null,
                      "92483": null,
                      "92731": null,
                      "92812": null,
                      "92903": null,
                      "93024": null,
                      "93366": null,
                      "93834": null,
                      "94014": null,
                      "94086": null,
                      "94283": null,
                      "94674": null,
                      "95413": null,
                      "95414": null,
                      "95478": null,
                      "95648": null,
                      "96167": null,
                      "96378": null,
                      "96441": null,
                      "96513": null,
                      "120474": null,
                      "137843": null,
                      "143590": null,
                      "151215": null,
                      "151435": null,
                      "153201": null,
                      "153287": null,
                      "153541": null,
                      "155504": null,
                      "155602": null,
                      "157381": null,
                      "158217": null,
                      "159011": null,
                      "161137": null,
                      "164607": null,
                      "167225": null,
                      "170665": null,
                      "171775": null,
                      "172818": null,
                      "184574": null,
                      "199657": null
                    },
                    "8 tablets": {
                      "24681": null
                    },
                    "15 tablets": {
                      "24779": null,
                      "31579": null,
                      "38321": null,
                      "42556": null,
                      "72265": null,
                      "72420": null,
                      "72646": null,
                      "72984": null,
                      "91902": null,
                      "92067": null,
                      "92274": null,
                      "93911": null,
                      "149976": null,
                      "164795": null
                    },
                    "20 tablets": {
                      "29752": null,
                      "131669": null
                    }
                  },
                  "100mg+125mg": {
                    "10 tablets": {
                      "1968": null,
                      "4633": null,
                      "19934": null,
                      "22850": null,
                      "24088": null,
                      "24918": null,
                      "27729": null,
                      "45333": null,
                      "53254": null,
                      "91961": null,
                      "93313": null,
                      "93510": null,
                      "93775": null,
                      "96355": null,
                      "116452": null,
                      "149322": null,
                      "151338": null,
                      "181976": null
                    },
                    "5 tablets": {
                      "40219": null
                    }
                  },
                  "400mg+650mg": {
                    "10 tablets": {
                      "3989": null,
                      "124305": null
                    }
                  },
                  "400mg+400mg": {
                    "10 tablets": {
                      "17565": null,
                      "50611": null,
                      "67748": null
                    }
                  },
                  "200mg+325mg": {
                    "10 tablets": {
                      "92668": null
                    }
                  },
                  "200mg+500mg": {
                    "10 tablets": {
                      "93174": null,
                      "93525": null,
                      "170159": null
                    }
                  },
                  "400mg+333mg": {
                    "10 tablets": {
                      "23792": null,
                      "57375": null,
                      "60482": null,
                      "81010": null,
                      "92663": null,
                      "93637": null,
                      "113531": null,
                      "169321": null
                    },
                    "100 tablets": {
                      "94399": null
                    }
                  },
                  "300mg+500mg": {
                    "10 tablets": {
                      "169190": null
                    }
                  },
                  "50mg+500mg": {
                    "10 tablets": {
                      "194338": null
                    }
                  },
                  "400mg+600mg": {
                    "10 tablets": {
                      "11572": null,
                      "23735": null,
                      "145580": null
                    }
                  },
                  "400mg+125mg": {
                    "10 tablets": {
                      "16534": null
                    }
                  },
                  "400mg+300mg": {
                    "10 tablets": {
                      "16191": null
                    }
                  },
                  "100mg+15mg": {
                    "10 tablets": {
                      "1619": null
                    }
                  }
                },
                "Oral Liquid": {
                  "100mg+125mg": {
                    "100 ml": {
                      "2631": null
                    },
                    "60 ml": {
                      "24726": null,
                      "26989": null,
                      "29086": null,
                      "31706": null,
                      "59306": null,
                      "73990": null,
                      "92589": null,
                      "93484": null,
                      "93643": null,
                      "93721": null,
                      "94217": null,
                      "96113": null,
                      "96789": null,
                      "96905": null,
                      "113286": null,
                      "114503": null,
                      "121616": null,
                      "122292": null,
                      "128334": null,
                      "135242": null,
                      "149245": null,
                      "167482": null,
                      "190465": null
                    },
                    "50 ml": {
                      "57703": null,
                      "150670": null,
                      "226025": null
                    },
                    "450 ml": {
                      "94156": null
                    }
                  },
                  "100mg+162.5mg": {
                    "60 ml": {
                      "1563": null,
                      "4153": null,
                      "17933": null,
                      "25482": null,
                      "26825": null,
                      "28122": null,
                      "29799": null,
                      "35893": null,
                      "72498": null,
                      "72855": null,
                      "77979": null,
                      "83521": null,
                      "90826": null,
                      "91891": null,
                      "92008": null,
                      "92320": null,
                      "92343": null,
                      "92357": null,
                      "93495": null,
                      "93707": null,
                      "93823": null,
                      "93905": null,
                      "95002": null,
                      "95139": null,
                      "134120": null,
                      "154630": null,
                      "154896": null,
                      "180812": null,
                      "182238": null,
                      "214013": null
                    },
                    "50 ml": {
                      "54765": null
                    },
                    "100 ml": {
                      "91898": null,
                      "95665": null,
                      "120737": null,
                      "170589": null,
                      "190735": null,
                      "219686": null
                    },
                    "70 ml": {
                      "92208": null
                    }
                  },
                  "100mg/5ml+162.5mg/5ml": {
                    "60 ml": {
                      "27303": null,
                      "48150": null,
                      "67848": null,
                      "73160": null,
                      "92786": null,
                      "93211": null,
                      "93562": null,
                      "118690": null,
                      "149685": null
                    }
                  },
                  "100mg/5ml+125mg/5ml": {
                    "60 ml": {
                      "47965": null,
                      "96875": null
                    }
                  },
                  "400mg+325mg": {
                    "60 ml": {
                      "23330": null,
                      "33927": null,
                      "93415": null
                    }
                  },
                  "400mg+500mg": {
                    "50 ml": {
                      "95724": null
                    }
                  },
                  "100mg+500mg": {
                    "50 ml": {
                      "129960": null
                    }
                  },
                  "75mg+500mg": {
                    "60 ml": {
                      "218118": null
                    }
                  },
                  "162.5mg+100mg": {
                    "100 ml": {
                      "157534": null
                    }
                  },
                  "100mg+162.4mg": {
                    "60 ml": {
                      "53079": null
                    }
                  },
                  "100mg+162.50mg": {
                    "100 ml": {
                      "96220": null
                    }
                  }
                },
                "Capsule": {
                  "400mg+325mg": {
                    "15 capsules": {
                      "79241": null
                    }
                  }
                }
              }
            },
            {
              "id": 1031,
              "salt": "Camylofin+Paracetamol",
              "salt_frequency": 8,
              "available_forms": [
                "Tablet",
                "Oral Liquid"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "25mg+300mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Oral Liquid": {
                  "12mg+125mg": {
                    "30 ml": {
                      "33396": null
                    }
                  },
                  "12.5mg/5ml+125mg/5ml": {
                    "60 ml": {
                      "278": null
                    },
                    "30 ml": {
                      "39135": null
                    }
                  }
                },
                "Tablet": {
                  "25mg+300mg": {
                    "10 tablets": {
                      "31302": null,
                      "32243": null
                    },
                    "15 tablets": {
                      "77": null
                    }
                  },
                  "50mg+500mg": {
                    "10 tablets": {
                      "2637": null
                    }
                  },
                  "50mg+325mg": {
                    "10 tablets": {
                      "22751": null
                    }
                  }
                }
              }
            },
            {
              "id": 2360,
              "salt": "Eperisone+Paracetamol",
              "salt_frequency": 2,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "50mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "50mg+325mg": {
                    "10 tablets": {
                      "64756": null
                    },
                    "6 tablets": {
                      "111763": null
                    }
                  }
                }
              }
            },
            {
              "id": 2212,
              "salt": "Meloxicam+Paracetamol",
              "salt_frequency": 2,
              "available_forms": [
                "Tablet",
                "Injection"
              ],
              "most_common": {
                "Form": "Injection",
                "Strength": "100mg+1500mg",
                "Packing": "4 injections"
              },
              "salt_forms_json": {
                "Tablet": {
                  "7.5mg+325mg": {
                    "10 tablets": {
                      "114680": null
                    }
                  }
                },
                "Injection": {
                  "100mg+1500mg": {
                    "4 injections": {
                      "58409": null
                    }
                  }
                }
              }
            },
            {
              "id": 3063,
              "salt": "Rofecoxib+Paracetamol",
              "salt_frequency": 6,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "25mg+500mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "25mg+500mg": {
                    "10 tablets": {
                      "158403": null,
                      "172619": null,
                      "172620": null,
                      "172832": null,
                      "173268": null,
                      "175297": null
                    }
                  }
                }
              }
            },
            {
              "id": 2225,
              "salt": "Paracetamol+Piroxicam",
              "salt_frequency": 2,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "325mg+20mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "325mg+20mg": {
                    "10 tablets": {
                      "52280": null,
                      "196742": null
                    }
                  }
                }
              }
            },
            {
              "id": 3033,
              "salt": "Diacerein+Paracetamol",
              "salt_frequency": 1,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "50mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "50mg+325mg": {
                    "10 tablets": {
                      "144487": null
                    }
                  }
                }
              }
            },
            {
              "id": 3,
              "salt": "Nimesulide+Paracetamol",
              "salt_frequency": 1579,
              "available_forms": [
                "Tablet",
                "Oral Liquid",
                "Capsule",
                "Drops"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "100mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "100mg+500mg": {
                    "10 tablets": {
                      "2439": null,
                      "3467": null,
                      "3814": null,
                      "5843": null,
                      "5879": null,
                      "6046": null,
                      "6311": null,
                      "6692": null,
                      "7155": null,
                      "7814": null,
                      "8073": null,
                      "8650": null,
                      "8723": null,
                      "9765": null,
                      "10010": null,
                      "11278": null,
                      "12747": null,
                      "12903": null,
                      "13069": null,
                      "13292": null,
                      "13398": null,
                      "13488": null,
                      "14399": null,
                      "14412": null,
                      "14576": null,
                      "15134": null,
                      "15834": null,
                      "16866": null,
                      "17460": null,
                      "18613": null,
                      "19717": null,
                      "20140": null,
                      "20902": null,
                      "22899": null,
                      "24765": null,
                      "25100": null,
                      "25490": null,
                      "25937": null,
                      "25957": null,
                      "26152": null,
                      "26477": null,
                      "26659": null,
                      "29347": null,
                      "29480": null,
                      "35206": null,
                      "36089": null,
                      "36859": null,
                      "37303": null,
                      "37445": null,
                      "38135": null,
                      "38800": null,
                      "39199": null,
                      "39568": null,
                      "39782": null,
                      "41258": null,
                      "41745": null,
                      "42707": null,
                      "43521": null,
                      "51738": null,
                      "52566": null,
                      "52676": null,
                      "52862": null,
                      "53093": null,
                      "53976": null,
                      "54479": null,
                      "54655": null,
                      "54766": null,
                      "55456": null,
                      "55986": null,
                      "56877": null,
                      "57139": null,
                      "57373": null,
                      "57621": null,
                      "60004": null,
                      "60253": null,
                      "66132": null,
                      "66180": null,
                      "66695": null,
                      "66989": null,
                      "67751": null,
                      "68057": null,
                      "70698": null,
                      "70704": null,
                      "70923": null,
                      "70946": null,
                      "71462": null,
                      "73989": null,
                      "74404": null,
                      "76422": null,
                      "76511": null,
                      "76573": null,
                      "77034": null,
                      "77520": null,
                      "77606": null,
                      "77756": null,
                      "77966": null,
                      "78472": null,
                      "78832": null,
                      "79150": null,
                      "79926": null,
                      "81750": null,
                      "82574": null,
                      "82798": null,
                      "82838": null,
                      "85362": null,
                      "87127": null,
                      "87401": null,
                      "87654": null,
                      "90732": null,
                      "91459": null,
                      "93832": null,
                      "93851": null,
                      "94837": null,
                      "95059": null,
                      "95293": null,
                      "95844": null,
                      "96295": null,
                      "96779": null,
                      "96963": null,
                      "97479": null,
                      "97613": null,
                      "97633": null,
                      "97678": null,
                      "97807": null,
                      "97936": null,
                      "98167": null,
                      "99196": null,
                      "99393": null,
                      "112600": null,
                      "114296": null,
                      "115384": null,
                      "115950": null,
                      "117180": null,
                      "118010": null,
                      "118121": null,
                      "118991": null,
                      "119028": null,
                      "119130": null,
                      "119171": null,
                      "119921": null,
                      "120068": null,
                      "120482": null,
                      "121215": null,
                      "121818": null,
                      "122775": null,
                      "123452": null,
                      "124044": null,
                      "124654": null,
                      "125112": null,
                      "126709": null,
                      "126730": null,
                      "126896": null,
                      "126994": null,
                      "127049": null,
                      "127051": null,
                      "127262": null,
                      "127274": null,
                      "127303": null,
                      "127346": null,
                      "127353": null,
                      "127410": null,
                      "127425": null,
                      "127428": null,
                      "127446": null,
                      "127485": null,
                      "127487": null,
                      "127533": null,
                      "127551": null,
                      "127552": null,
                      "127563": null,
                      "127699": null,
                      "127733": null,
                      "127756": null,
                      "127803": null,
                      "127890": null,
                      "127911": null,
                      "128004": null,
                      "128009": null,
                      "128027": null,
                      "128042": null,
                      "128121": null,
                      "128184": null,
                      "128187": null,
                      "128216": null,
                      "128228": null,
                      "128248": null,
                      "128258": null,
                      "128279": null,
                      "128327": null,
                      "128379": null,
                      "128402": null,
                      "128433": null,
                      "128437": null,
                      "128551": null,
                      "128666": null,
                      "128687": null,
                      "128728": null,
                      "128749": null,
                      "128783": null,
                      "128814": null,
                      "128836": null,
                      "128857": null,
                      "128894": null,
                      "128911": null,
                      "128916": null,
                      "128920": null,
                      "128926": null,
                      "128936": null,
                      "128977": null,
                      "129086": null,
                      "129103": null,
                      "129122": null,
                      "129124": null,
                      "129142": null,
                      "129198": null,
                      "129212": null,
                      "129219": null,
                      "129232": null,
                      "129253": null,
                      "129333": null,
                      "129349": null,
                      "129363": null,
                      "129366": null,
                      "129381": null,
                      "129410": null,
                      "129423": null,
                      "129490": null,
                      "129513": null,
                      "129523": null,
                      "129592": null,
                      "129600": null,
                      "129609": null,
                      "129644": null,
                      "129666": null,
                      "129682": null,
                      "129684": null,
                      "129685": null,
                      "129731": null,
                      "129755": null,
                      "129764": null,
                      "129825": null,
                      "129879": null,
                      "129886": null,
                      "129920": null,
                      "129962": null,
                      "130058": null,
                      "130116": null,
                      "130217": null,
                      "130232": null,
                      "130253": null,
                      "130282": null,
                      "130284": null,
                      "130336": null,
                      "130366": null,
                      "130427": null,
                      "130521": null,
                      "130533": null,
                      "130536": null,
                      "130591": null,
                      "130621": null,
                      "130635": null,
                      "130660": null,
                      "130737": null,
                      "130843": null,
                      "130874": null,
                      "130888": null,
                      "130928": null,
                      "130930": null,
                      "130957": null,
                      "130958": null,
                      "130975": null,
                      "130985": null,
                      "130991": null,
                      "131087": null,
                      "131115": null,
                      "131139": null,
                      "131143": null,
                      "131152": null,
                      "131157": null,
                      "131198": null,
                      "131205": null,
                      "131281": null,
                      "131343": null,
                      "131354": null,
                      "131357": null,
                      "131417": null,
                      "131462": null,
                      "131518": null,
                      "131545": null,
                      "131550": null,
                      "131567": null,
                      "131634": null,
                      "131670": null,
                      "131709": null,
                      "131723": null,
                      "131768": null,
                      "131778": null,
                      "131852": null,
                      "131937": null,
                      "132037": null,
                      "132075": null,
                      "132078": null,
                      "132122": null,
                      "132141": null,
                      "132220": null,
                      "132227": null,
                      "132282": null,
                      "132299": null,
                      "132305": null,
                      "132344": null,
                      "132375": null,
                      "132405": null,
                      "132494": null,
                      "132521": null,
                      "132546": null,
                      "132547": null,
                      "132564": null,
                      "132630": null,
                      "132720": null,
                      "132722": null,
                      "132839": null,
                      "132920": null,
                      "132935": null,
                      "132989": null,
                      "133019": null,
                      "133020": null,
                      "133022": null,
                      "133062": null,
                      "133070": null,
                      "133082": null,
                      "133144": null,
                      "133166": null,
                      "133211": null,
                      "133273": null,
                      "133274": null,
                      "133325": null,
                      "133545": null,
                      "133594": null,
                      "133639": null,
                      "133641": null,
                      "133701": null,
                      "133761": null,
                      "133767": null,
                      "133805": null,
                      "133826": null,
                      "133841": null,
                      "133863": null,
                      "133893": null,
                      "133905": null,
                      "133940": null,
                      "133945": null,
                      "134006": null,
                      "134034": null,
                      "134074": null,
                      "134084": null,
                      "134086": null,
                      "134125": null,
                      "134188": null,
                      "134238": null,
                      "134255": null,
                      "134256": null,
                      "134318": null,
                      "134332": null,
                      "134446": null,
                      "134498": null,
                      "134573": null,
                      "134586": null,
                      "134653": null,
                      "134712": null,
                      "134759": null,
                      "134769": null,
                      "134790": null,
                      "134842": null,
                      "134925": null,
                      "134954": null,
                      "135084": null,
                      "135303": null,
                      "135335": null,
                      "135464": null,
                      "135613": null,
                      "135623": null,
                      "135625": null,
                      "135657": null,
                      "135720": null,
                      "135799": null,
                      "135864": null,
                      "135982": null,
                      "136071": null,
                      "136210": null,
                      "136212": null,
                      "136236": null,
                      "136284": null,
                      "136354": null,
                      "136387": null,
                      "136389": null,
                      "136401": null,
                      "136420": null,
                      "136500": null,
                      "136538": null,
                      "137506": null,
                      "138471": null,
                      "138630": null,
                      "138936": null,
                      "139225": null,
                      "139628": null,
                      "140750": null,
                      "141191": null,
                      "142059": null,
                      "144145": null,
                      "144324": null,
                      "144558": null,
                      "144909": null,
                      "146122": null,
                      "146758": null,
                      "148494": null,
                      "148898": null,
                      "148965": null,
                      "149057": null,
                      "149351": null,
                      "150010": null,
                      "150317": null,
                      "150459": null,
                      "150970": null,
                      "151189": null,
                      "151551": null,
                      "152367": null,
                      "153074": null,
                      "153715": null,
                      "154527": null,
                      "154657": null,
                      "154904": null,
                      "154956": null,
                      "155563": null,
                      "155662": null,
                      "155786": null,
                      "155944": null,
                      "156762": null,
                      "156776": null,
                      "157171": null,
                      "157816": null,
                      "157918": null,
                      "158273": null,
                      "158648": null,
                      "159242": null,
                      "159395": null,
                      "159716": null,
                      "162146": null,
                      "162307": null,
                      "162939": null,
                      "164867": null,
                      "166365": null,
                      "166547": null,
                      "168309": null,
                      "168321": null,
                      "168438": null,
                      "169074": null,
                      "170532": null,
                      "171311": null,
                      "171496": null,
                      "171806": null,
                      "173403": null,
                      "175291": null,
                      "176577": null,
                      "177399": null,
                      "179945": null,
                      "182186": null,
                      "182507": null,
                      "182613": null,
                      "183301": null,
                      "183612": null,
                      "184908": null,
                      "185027": null,
                      "185768": null,
                      "186067": null,
                      "187665": null,
                      "187791": null,
                      "188107": null,
                      "188339": null,
                      "188355": null,
                      "188960": null,
                      "189728": null,
                      "189929": null,
                      "190007": null,
                      "190191": null,
                      "190717": null,
                      "191407": null,
                      "194462": null,
                      "195903": null,
                      "196291": null,
                      "196307": null,
                      "197793": null,
                      "198307": null,
                      "199030": null,
                      "199656": null,
                      "210302": null,
                      "210343": null,
                      "210498": null,
                      "211462": null,
                      "211812": null,
                      "212259": null,
                      "212307": null,
                      "212754": null,
                      "213370": null,
                      "215689": null,
                      "216007": null,
                      "216047": null,
                      "216128": null,
                      "216675": null,
                      "218273": null,
                      "218373": null,
                      "219400": null,
                      "221029": null,
                      "221049": null,
                      "221249": null,
                      "224991": null,
                      "225005": null
                    },
                    "10 tablet dt": {
                      "65950": null,
                      "128145": null,
                      "136268": null
                    },
                    "100 tablets": {
                      "84331": null,
                      "85183": null,
                      "127469": null,
                      "129815": null
                    },
                    "400 tablets": {
                      "128663": null
                    },
                    "6 tablets": {
                      "130771": null
                    },
                    "1 Tablet": {
                      "131960": null
                    },
                    "20 tablets": {
                      "19149": null,
                      "188727": null,
                      "212623": null
                    }
                  },
                  "100mg+325mg": {
                    "10 tablets": {
                      "1880": null,
                      "3033": null,
                      "4464": null,
                      "6172": null,
                      "7496": null,
                      "8815": null,
                      "9811": null,
                      "9814": null,
                      "10121": null,
                      "10364": null,
                      "11190": null,
                      "13084": null,
                      "13959": null,
                      "14173": null,
                      "15894": null,
                      "16005": null,
                      "16118": null,
                      "16639": null,
                      "17025": null,
                      "17382": null,
                      "17570": null,
                      "17823": null,
                      "17837": null,
                      "18332": null,
                      "18479": null,
                      "20002": null,
                      "20384": null,
                      "20973": null,
                      "21140": null,
                      "21860": null,
                      "21908": null,
                      "21992": null,
                      "22854": null,
                      "24386": null,
                      "25248": null,
                      "25485": null,
                      "26010": null,
                      "26588": null,
                      "26961": null,
                      "27680": null,
                      "27720": null,
                      "28100": null,
                      "28152": null,
                      "28515": null,
                      "28634": null,
                      "28735": null,
                      "28938": null,
                      "29006": null,
                      "29116": null,
                      "29158": null,
                      "29337": null,
                      "36174": null,
                      "36590": null,
                      "38876": null,
                      "39451": null,
                      "40980": null,
                      "42095": null,
                      "42846": null,
                      "44013": null,
                      "44488": null,
                      "45007": null,
                      "45235": null,
                      "46122": null,
                      "46301": null,
                      "46509": null,
                      "46572": null,
                      "47385": null,
                      "47685": null,
                      "48136": null,
                      "48804": null,
                      "49641": null,
                      "50190": null,
                      "51428": null,
                      "53383": null,
                      "53745": null,
                      "54121": null,
                      "55300": null,
                      "55965": null,
                      "56350": null,
                      "56887": null,
                      "56914": null,
                      "56940": null,
                      "57455": null,
                      "58022": null,
                      "58067": null,
                      "59692": null,
                      "59703": null,
                      "60056": null,
                      "60529": null,
                      "61307": null,
                      "61491": null,
                      "61654": null,
                      "61966": null,
                      "62034": null,
                      "65255": null,
                      "66054": null,
                      "67225": null,
                      "68036": null,
                      "68732": null,
                      "68896": null,
                      "69193": null,
                      "69437": null,
                      "69723": null,
                      "70302": null,
                      "71430": null,
                      "72121": null,
                      "74008": null,
                      "74739": null,
                      "74821": null,
                      "75238": null,
                      "75258": null,
                      "75623": null,
                      "75793": null,
                      "76726": null,
                      "77105": null,
                      "77528": null,
                      "77806": null,
                      "77841": null,
                      "78310": null,
                      "78523": null,
                      "79072": null,
                      "79251": null,
                      "79442": null,
                      "80202": null,
                      "80489": null,
                      "80733": null,
                      "80822": null,
                      "81250": null,
                      "82511": null,
                      "83291": null,
                      "84573": null,
                      "84896": null,
                      "85448": null,
                      "86056": null,
                      "86439": null,
                      "86497": null,
                      "86909": null,
                      "87037": null,
                      "87851": null,
                      "88100": null,
                      "88145": null,
                      "88202": null,
                      "89884": null,
                      "90385": null,
                      "90562": null,
                      "90887": null,
                      "91566": null,
                      "91678": null,
                      "91766": null,
                      "91869": null,
                      "93689": null,
                      "94543": null,
                      "94622": null,
                      "94933": null,
                      "96427": null,
                      "96892": null,
                      "97126": null,
                      "97265": null,
                      "97550": null,
                      "97659": null,
                      "97750": null,
                      "97819": null,
                      "97907": null,
                      "97956": null,
                      "98062": null,
                      "98187": null,
                      "98394": null,
                      "98481": null,
                      "113276": null,
                      "115033": null,
                      "115671": null,
                      "116694": null,
                      "117945": null,
                      "118153": null,
                      "118268": null,
                      "118531": null,
                      "119345": null,
                      "120081": null,
                      "120739": null,
                      "121059": null,
                      "121312": null,
                      "121429": null,
                      "123197": null,
                      "123364": null,
                      "123624": null,
                      "123908": null,
                      "124143": null,
                      "124229": null,
                      "125110": null,
                      "125344": null,
                      "125463": null,
                      "125690": null,
                      "125787": null,
                      "125977": null,
                      "126167": null,
                      "126266": null,
                      "126390": null,
                      "126463": null,
                      "126475": null,
                      "126592": null,
                      "126594": null,
                      "126608": null,
                      "126674": null,
                      "126747": null,
                      "126851": null,
                      "126865": null,
                      "126879": null,
                      "126889": null,
                      "126939": null,
                      "126979": null,
                      "127088": null,
                      "127151": null,
                      "127395": null,
                      "127643": null,
                      "127656": null,
                      "127867": null,
                      "127900": null,
                      "127928": null,
                      "127940": null,
                      "127968": null,
                      "128000": null,
                      "128030": null,
                      "128109": null,
                      "128213": null,
                      "128284": null,
                      "128308": null,
                      "128340": null,
                      "128384": null,
                      "128395": null,
                      "128487": null,
                      "128497": null,
                      "128556": null,
                      "128576": null,
                      "128651": null,
                      "128710": null,
                      "128743": null,
                      "128750": null,
                      "128758": null,
                      "128820": null,
                      "128833": null,
                      "128841": null,
                      "128881": null,
                      "128965": null,
                      "129018": null,
                      "129020": null,
                      "129058": null,
                      "129136": null,
                      "129181": null,
                      "129221": null,
                      "129280": null,
                      "129284": null,
                      "129299": null,
                      "129412": null,
                      "129439": null,
                      "129440": null,
                      "129442": null,
                      "129483": null,
                      "129505": null,
                      "129545": null,
                      "129549": null,
                      "129551": null,
                      "129553": null,
                      "129555": null,
                      "129646": null,
                      "129649": null,
                      "129670": null,
                      "129747": null,
                      "129792": null,
                      "129858": null,
                      "129881": null,
                      "129938": null,
                      "129983": null,
                      "130001": null,
                      "130041": null,
                      "130053": null,
                      "130076": null,
                      "130117": null,
                      "130128": null,
                      "130141": null,
                      "130143": null,
                      "130158": null,
                      "130167": null,
                      "130170": null,
                      "130238": null,
                      "130277": null,
                      "130290": null,
                      "130346": null,
                      "130347": null,
                      "130356": null,
                      "130372": null,
                      "130460": null,
                      "130491": null,
                      "130501": null,
                      "130506": null,
                      "130531": null,
                      "130550": null,
                      "130567": null,
                      "130582": null,
                      "130596": null,
                      "130611": null,
                      "130612": null,
                      "130626": null,
                      "130636": null,
                      "130655": null,
                      "130668": null,
                      "130672": null,
                      "130707": null,
                      "130711": null,
                      "130746": null,
                      "130775": null,
                      "130790": null,
                      "130870": null,
                      "130901": null,
                      "130918": null,
                      "130984": null,
                      "131043": null,
                      "131078": null,
                      "131084": null,
                      "131095": null,
                      "131117": null,
                      "131131": null,
                      "131158": null,
                      "131182": null,
                      "131189": null,
                      "131215": null,
                      "131216": null,
                      "131289": null,
                      "131290": null,
                      "131309": null,
                      "131364": null,
                      "131366": null,
                      "131390": null,
                      "131391": null,
                      "131408": null,
                      "131413": null,
                      "131414": null,
                      "131422": null,
                      "131492": null,
                      "131500": null,
                      "131501": null,
                      "131553": null,
                      "131557": null,
                      "131574": null,
                      "131577": null,
                      "131628": null,
                      "131649": null,
                      "131688": null,
                      "131699": null,
                      "131734": null,
                      "131775": null,
                      "131807": null,
                      "131813": null,
                      "131845": null,
                      "131849": null,
                      "131865": null,
                      "131901": null,
                      "131959": null,
                      "131971": null,
                      "131995": null,
                      "131996": null,
                      "132025": null,
                      "132051": null,
                      "132059": null,
                      "132086": null,
                      "132094": null,
                      "132132": null,
                      "132167": null,
                      "132178": null,
                      "132205": null,
                      "132225": null,
                      "132262": null,
                      "132322": null,
                      "132354": null,
                      "132358": null,
                      "132359": null,
                      "132389": null,
                      "132390": null,
                      "132410": null,
                      "132429": null,
                      "132433": null,
                      "132437": null,
                      "132439": null,
                      "132440": null,
                      "132441": null,
                      "132446": null,
                      "132484": null,
                      "132516": null,
                      "132528": null,
                      "132583": null,
                      "132586": null,
                      "132588": null,
                      "132592": null,
                      "132618": null,
                      "132684": null,
                      "132688": null,
                      "132703": null,
                      "132734": null,
                      "132743": null,
                      "132773": null,
                      "132812": null,
                      "132821": null,
                      "132832": null,
                      "132834": null,
                      "132874": null,
                      "132893": null,
                      "132903": null,
                      "132904": null,
                      "132945": null,
                      "132948": null,
                      "132951": null,
                      "132954": null,
                      "132957": null,
                      "132977": null,
                      "132980": null,
                      "132987": null,
                      "133032": null,
                      "133041": null,
                      "133045": null,
                      "133085": null,
                      "133086": null,
                      "133090": null,
                      "133096": null,
                      "133099": null,
                      "133102": null,
                      "133116": null,
                      "133124": null,
                      "133142": null,
                      "133143": null,
                      "133150": null,
                      "133167": null,
                      "133171": null,
                      "133181": null,
                      "133194": null,
                      "133294": null,
                      "133335": null,
                      "133350": null,
                      "133382": null,
                      "133388": null,
                      "133453": null,
                      "133456": null,
                      "133460": null,
                      "133463": null,
                      "133484": null,
                      "133493": null,
                      "133500": null,
                      "133507": null,
                      "133510": null,
                      "133536": null,
                      "133548": null,
                      "133585": null,
                      "133596": null,
                      "133598": null,
                      "133610": null,
                      "133637": null,
                      "133646": null,
                      "133653": null,
                      "133654": null,
                      "133659": null,
                      "133662": null,
                      "133666": null,
                      "133668": null,
                      "133675": null,
                      "133676": null,
                      "133677": null,
                      "133709": null,
                      "133728": null,
                      "133734": null,
                      "133738": null,
                      "133745": null,
                      "133777": null,
                      "133780": null,
                      "133847": null,
                      "133866": null,
                      "133871": null,
                      "133873": null,
                      "133895": null,
                      "133907": null,
                      "133923": null,
                      "133924": null,
                      "133978": null,
                      "133982": null,
                      "133984": null,
                      "133989": null,
                      "133996": null,
                      "134104": null,
                      "134132": null,
                      "134217": null,
                      "134229": null,
                      "134270": null,
                      "134278": null,
                      "134297": null,
                      "134301": null,
                      "134382": null,
                      "134383": null,
                      "134393": null,
                      "134397": null,
                      "134469": null,
                      "134470": null,
                      "134531": null,
                      "134539": null,
                      "134543": null,
                      "134544": null,
                      "134554": null,
                      "134562": null,
                      "134605": null,
                      "134610": null,
                      "134614": null,
                      "134622": null,
                      "134679": null,
                      "134683": null,
                      "134688": null,
                      "134725": null,
                      "134740": null,
                      "134745": null,
                      "134748": null,
                      "134755": null,
                      "134803": null,
                      "134826": null,
                      "134886": null,
                      "134900": null,
                      "134949": null,
                      "134956": null,
                      "134966": null,
                      "134977": null,
                      "134980": null,
                      "134986": null,
                      "134998": null,
                      "135022": null,
                      "135053": null,
                      "135059": null,
                      "135065": null,
                      "135113": null,
                      "135120": null,
                      "135124": null,
                      "135126": null,
                      "135130": null,
                      "135137": null,
                      "135141": null,
                      "135160": null,
                      "135163": null,
                      "135179": null,
                      "135182": null,
                      "135189": null,
                      "135204": null,
                      "135205": null,
                      "135212": null,
                      "135260": null,
                      "135262": null,
                      "135267": null,
                      "135278": null,
                      "135284": null,
                      "135300": null,
                      "135323": null,
                      "135351": null,
                      "135390": null,
                      "135395": null,
                      "135416": null,
                      "135417": null,
                      "135430": null,
                      "135431": null,
                      "135470": null,
                      "135532": null,
                      "135542": null,
                      "135562": null,
                      "135564": null,
                      "135576": null,
                      "135586": null,
                      "135588": null,
                      "135592": null,
                      "135597": null,
                      "135644": null,
                      "135648": null,
                      "135667": null,
                      "135686": null,
                      "135693": null,
                      "135697": null,
                      "135742": null,
                      "135743": null,
                      "135756": null,
                      "135757": null,
                      "135761": null,
                      "135808": null,
                      "135810": null,
                      "135822": null,
                      "135826": null,
                      "135840": null,
                      "135920": null,
                      "135964": null,
                      "135988": null,
                      "136006": null,
                      "136026": null,
                      "136031": null,
                      "136062": null,
                      "136065": null,
                      "136069": null,
                      "136105": null,
                      "136109": null,
                      "136132": null,
                      "136143": null,
                      "136159": null,
                      "136186": null,
                      "136215": null,
                      "136233": null,
                      "136240": null,
                      "136245": null,
                      "136258": null,
                      "136289": null,
                      "136309": null,
                      "136319": null,
                      "136323": null,
                      "136330": null,
                      "136368": null,
                      "136369": null,
                      "136374": null,
                      "136377": null,
                      "136407": null,
                      "136417": null,
                      "136418": null,
                      "136464": null,
                      "136476": null,
                      "136496": null,
                      "136504": null,
                      "136505": null,
                      "136507": null,
                      "136509": null,
                      "136510": null,
                      "136516": null,
                      "136531": null,
                      "136534": null,
                      "136543": null,
                      "136549": null,
                      "136569": null,
                      "139778": null,
                      "140627": null,
                      "141826": null,
                      "141837": null,
                      "142409": null,
                      "142882": null,
                      "143972": null,
                      "144180": null,
                      "145286": null,
                      "145912": null,
                      "146339": null,
                      "146623": null,
                      "147090": null,
                      "147246": null,
                      "147397": null,
                      "152381": null,
                      "152640": null,
                      "152869": null,
                      "152940": null,
                      "153062": null,
                      "153487": null,
                      "154207": null,
                      "154623": null,
                      "154841": null,
                      "155065": null,
                      "155189": null,
                      "155401": null,
                      "155978": null,
                      "156578": null,
                      "156684": null,
                      "156845": null,
                      "157036": null,
                      "157442": null,
                      "157447": null,
                      "157847": null,
                      "158142": null,
                      "158575": null,
                      "158777": null,
                      "159137": null,
                      "159150": null,
                      "159787": null,
                      "159904": null,
                      "160826": null,
                      "161000": null,
                      "161407": null,
                      "161489": null,
                      "161840": null,
                      "162990": null,
                      "163637": null,
                      "164945": null,
                      "165406": null,
                      "167006": null,
                      "167893": null,
                      "168562": null,
                      "168722": null,
                      "168740": null,
                      "169556": null,
                      "170635": null,
                      "170874": null,
                      "171365": null,
                      "171493": null,
                      "171566": null,
                      "171611": null,
                      "172599": null,
                      "172793": null,
                      "172990": null,
                      "172995": null,
                      "173324": null,
                      "173414": null,
                      "173533": null,
                      "173630": null,
                      "173716": null,
                      "173781": null,
                      "173916": null,
                      "174013": null,
                      "174272": null,
                      "174282": null,
                      "174308": null,
                      "176722": null,
                      "176723": null,
                      "178937": null,
                      "178950": null,
                      "179083": null,
                      "179146": null,
                      "179427": null,
                      "179494": null,
                      "179497": null,
                      "180088": null,
                      "180521": null,
                      "181324": null,
                      "182437": null,
                      "182496": null,
                      "182832": null,
                      "182849": null,
                      "183102": null,
                      "183197": null,
                      "183363": null,
                      "183394": null,
                      "183425": null,
                      "183551": null,
                      "183971": null,
                      "184568": null,
                      "184665": null,
                      "184839": null,
                      "184862": null,
                      "184930": null,
                      "184944": null,
                      "185167": null,
                      "185553": null,
                      "185941": null,
                      "186697": null,
                      "187208": null,
                      "187594": null,
                      "187712": null,
                      "188048": null,
                      "188222": null,
                      "189081": null,
                      "189100": null,
                      "189228": null,
                      "189471": null,
                      "189869": null,
                      "189916": null,
                      "189968": null,
                      "190508": null,
                      "190980": null,
                      "196437": null,
                      "196681": null,
                      "197460": null,
                      "197703": null,
                      "197878": null,
                      "199999": null,
                      "210788": null,
                      "211114": null,
                      "211301": null,
                      "211931": null,
                      "212504": null,
                      "213453": null,
                      "213986": null,
                      "214049": null,
                      "214060": null,
                      "214216": null,
                      "214575": null,
                      "214660": null,
                      "214988": null,
                      "215401": null,
                      "215779": null,
                      "216020": null,
                      "216331": null,
                      "216443": null,
                      "217007": null,
                      "217033": null,
                      "218616": null,
                      "218666": null,
                      "218735": null,
                      "218756": null,
                      "219433": null,
                      "219541": null,
                      "219615": null,
                      "219744": null,
                      "221191": null,
                      "223025": null,
                      "226103": null
                    },
                    "10 tablet dt": {
                      "126710": null,
                      "128660": null,
                      "131717": null,
                      "136281": null,
                      "139840": null
                    },
                    "10 tablet md": {
                      "129347": null
                    },
                    "15 tablets": {
                      "126524": null,
                      "127084": null,
                      "130109": null,
                      "134565": null,
                      "134680": null,
                      "176958": null
                    },
                    "20 tablets": {
                      "129617": null,
                      "132719": null
                    },
                    "101 tablets": {
                      "197898": null
                    },
                    "12 tablets": {
                      "26123": null
                    }
                  },
                  "50mg+500mg": {
                    "10 tablets": {
                      "4250": null,
                      "130840": null
                    }
                  },
                  "100mg+350mg": {
                    "10 tablets": {
                      "2905": null,
                      "63290": null,
                      "123562": null,
                      "128759": null,
                      "131912": null,
                      "132810": null,
                      "133904": null,
                      "135376": null,
                      "138200": null
                    },
                    "20 tablets": {
                      "131783": null
                    }
                  },
                  "50mg+250mg": {
                    "10 tablets": {
                      "46249": null,
                      "149232": null
                    }
                  },
                  "100mg+375mg": {
                    "10 tablets": {
                      "60408": null
                    }
                  },
                  "50mg+125mg": {
                    "10 tablets": {
                      "122618": null
                    }
                  },
                  "100mg+200mg": {
                    "10 tablets": {
                      "128984": null
                    }
                  },
                  "500mg+250mg": {
                    "3 tablets": {
                      "127195": null
                    }
                  },
                  "50mg+100mg": {
                    "10 tablets": {
                      "134316": null
                    }
                  },
                  "100mg+10mg": {
                    "10 tablets": {
                      "185851": null
                    }
                  }
                },
                "Oral Liquid": {
                  "50mg+125mg": {
                    "60 ml": {
                      "5931": null,
                      "9748": null,
                      "16068": null,
                      "16161": null,
                      "18588": null,
                      "18600": null,
                      "21213": null,
                      "21239": null,
                      "23769": null,
                      "24114": null,
                      "26005": null,
                      "45302": null,
                      "45570": null,
                      "46394": null,
                      "47332": null,
                      "47413": null,
                      "48809": null,
                      "53668": null,
                      "57180": null,
                      "59078": null,
                      "60031": null,
                      "61213": null,
                      "61648": null,
                      "68716": null,
                      "69348": null,
                      "70282": null,
                      "70508": null,
                      "70623": null,
                      "72379": null,
                      "74719": null,
                      "78411": null,
                      "80660": null,
                      "86219": null,
                      "88306": null,
                      "90576": null,
                      "96771": null,
                      "97826": null,
                      "98031": null,
                      "98518": null,
                      "117350": null,
                      "118100": null,
                      "119621": null,
                      "123398": null,
                      "123459": null,
                      "124568": null,
                      "125642": null,
                      "127107": null,
                      "128155": null,
                      "128657": null,
                      "129257": null,
                      "129602": null,
                      "129642": null,
                      "129689": null,
                      "129923": null,
                      "130064": null,
                      "130132": null,
                      "130392": null,
                      "130485": null,
                      "131175": null,
                      "131236": null,
                      "131347": null,
                      "131694": null,
                      "132081": null,
                      "132107": null,
                      "132296": null,
                      "132378": null,
                      "132496": null,
                      "132840": null,
                      "132959": null,
                      "133007": null,
                      "133008": null,
                      "133159": null,
                      "133298": null,
                      "133299": null,
                      "133445": null,
                      "133556": null,
                      "133897": null,
                      "133941": null,
                      "133942": null,
                      "134067": null,
                      "134085": null,
                      "134242": null,
                      "134308": null,
                      "134310": null,
                      "134327": null,
                      "134386": null,
                      "134437": null,
                      "134571": null,
                      "134595": null,
                      "134630": null,
                      "134836": null,
                      "134905": null,
                      "134945": null,
                      "135003": null,
                      "135070": null,
                      "135071": null,
                      "135096": null,
                      "135144": null,
                      "135289": null,
                      "135290": null,
                      "135312": null,
                      "135378": null,
                      "135533": null,
                      "135602": null,
                      "135704": null,
                      "135707": null,
                      "135716": null,
                      "135722": null,
                      "135868": null,
                      "135869": null,
                      "135947": null,
                      "135960": null,
                      "135963": null,
                      "136119": null,
                      "136128": null,
                      "136130": null,
                      "136138": null,
                      "136162": null,
                      "136253": null,
                      "136381": null,
                      "136402": null,
                      "136552": null,
                      "136562": null,
                      "143573": null,
                      "145108": null,
                      "151926": null,
                      "152908": null,
                      "156739": null,
                      "158432": null,
                      "159825": null,
                      "160157": null,
                      "160171": null,
                      "160191": null,
                      "161279": null,
                      "161280": null,
                      "161374": null,
                      "161839": null,
                      "162968": null,
                      "171598": null,
                      "172748": null,
                      "176393": null,
                      "180908": null,
                      "183999": null,
                      "186849": null,
                      "187654": null,
                      "190271": null,
                      "190658": null,
                      "190661": null,
                      "199195": null,
                      "213663": null,
                      "216338": null,
                      "216600": null,
                      "216964": null,
                      "218682": null
                    },
                    "30 ml": {
                      "18954": null,
                      "129528": null,
                      "132930": null,
                      "134835": null,
                      "136129": null
                    },
                    "50 ml": {
                      "9938": null,
                      "124808": null,
                      "134697": null,
                      "136378": null
                    },
                    "100 ml": {
                      "132627": null
                    }
                  },
                  "50mg/5ml+125mg/5ml": {
                    "60 ml": {
                      "15642": null,
                      "27937": null,
                      "71372": null,
                      "74966": null,
                      "133343": null,
                      "134780": null,
                      "135905": null
                    }
                  },
                  "100mg+500mg": {
                    "60 ml": {
                      "56281": null,
                      "57486": null,
                      "58213": null,
                      "69686": null,
                      "87402": null,
                      "98855": null,
                      "129796": null,
                      "131005": null,
                      "131630": null,
                      "131919": null,
                      "132275": null,
                      "132662": null,
                      "133300": null,
                      "133429": null,
                      "133558": null,
                      "133754": null,
                      "133843": null,
                      "133946": null,
                      "134071": null,
                      "134569": null,
                      "135219": null,
                      "135235": null,
                      "135601": null,
                      "136100": null,
                      "142918": null,
                      "160603": null,
                      "160897": null,
                      "170946": null,
                      "223594": null
                    }
                  },
                  "125mg+50mg": {
                    "60 ml": {
                      "125415": null,
                      "135483": null
                    }
                  },
                  "100mg+125mg": {
                    "60 ml": {
                      "17947": null,
                      "125122": null,
                      "135433": null
                    },
                    "50 ml": {
                      "134276": null
                    }
                  },
                  "100mg+325mg": {
                    "60 ml": {
                      "128001": null,
                      "131060": null,
                      "133564": null
                    }
                  },
                  "50mg+250mg": {
                    "60 ml": {
                      "130166": null,
                      "130692": null,
                      "131963": null,
                      "189908": null
                    }
                  },
                  "50mg+500mg": {
                    "60 ml": {
                      "136558": null
                    }
                  },
                  "500mg+125mg": {
                    "60 ml": {
                      "135301": null
                    }
                  },
                  "25mg+125mg": {
                    "60 ml": {
                      "80247": null
                    }
                  }
                },
                "Capsule": {
                  "100mg+500mg": {
                    "10 capsules": {
                      "17139": null,
                      "157908": null
                    },
                    "100 ml": {
                      "58103": null
                    }
                  }
                },
                "Drops": {
                  "50mg+125mg": {
                    "15 ml": {
                      "130227": null
                    }
                  }
                }
              }
            },
            {
              "id": 199,
              "salt": "Diclofenac+Paracetamol",
              "salt_frequency": 794,
              "available_forms": [
                "Tablet",
                "Injection",
                "Capsule",
                "Oral Liquid"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "50mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "50mg+325mg": {
                    "10 tablets": {
                      "3857": null,
                      "8996": null,
                      "9214": null,
                      "11130": null,
                      "11200": null,
                      "12238": null,
                      "13561": null,
                      "13968": null,
                      "14146": null,
                      "14320": null,
                      "14982": null,
                      "15059": null,
                      "15449": null,
                      "16364": null,
                      "16650": null,
                      "16835": null,
                      "17037": null,
                      "17322": null,
                      "17490": null,
                      "17969": null,
                      "18477": null,
                      "19190": null,
                      "20035": null,
                      "24079": null,
                      "24759": null,
                      "25418": null,
                      "27107": null,
                      "28479": null,
                      "29122": null,
                      "29160": null,
                      "29239": null,
                      "29244": null,
                      "29263": null,
                      "29530": null,
                      "29654": null,
                      "30752": null,
                      "32617": null,
                      "33236": null,
                      "37055": null,
                      "37975": null,
                      "38209": null,
                      "39832": null,
                      "41021": null,
                      "41739": null,
                      "43465": null,
                      "43779": null,
                      "44144": null,
                      "45152": null,
                      "45312": null,
                      "47588": null,
                      "49250": null,
                      "49270": null,
                      "49279": null,
                      "49293": null,
                      "49438": null,
                      "49477": null,
                      "49986": null,
                      "50048": null,
                      "50300": null,
                      "50376": null,
                      "50481": null,
                      "50582": null,
                      "50682": null,
                      "50685": null,
                      "50777": null,
                      "50806": null,
                      "50815": null,
                      "50823": null,
                      "50919": null,
                      "50945": null,
                      "51025": null,
                      "51168": null,
                      "51170": null,
                      "51285": null,
                      "51571": null,
                      "51768": null,
                      "51871": null,
                      "52198": null,
                      "52260": null,
                      "52532": null,
                      "52551": null,
                      "52574": null,
                      "52583": null,
                      "52764": null,
                      "53293": null,
                      "53467": null,
                      "53476": null,
                      "53577": null,
                      "53825": null,
                      "53838": null,
                      "53839": null,
                      "53856": null,
                      "54056": null,
                      "54230": null,
                      "54239": null,
                      "54243": null,
                      "54261": null,
                      "54385": null,
                      "54412": null,
                      "54423": null,
                      "54552": null,
                      "54637": null,
                      "54643": null,
                      "54747": null,
                      "54782": null,
                      "54793": null,
                      "54832": null,
                      "55189": null,
                      "55238": null,
                      "55241": null,
                      "55396": null,
                      "55494": null,
                      "55549": null,
                      "55756": null,
                      "55801": null,
                      "55952": null,
                      "55954": null,
                      "56166": null,
                      "56366": null,
                      "56433": null,
                      "56470": null,
                      "56488": null,
                      "56521": null,
                      "56563": null,
                      "56623": null,
                      "56659": null,
                      "56731": null,
                      "56855": null,
                      "56863": null,
                      "56910": null,
                      "56932": null,
                      "57012": null,
                      "57036": null,
                      "57114": null,
                      "57154": null,
                      "57195": null,
                      "57299": null,
                      "57413": null,
                      "57445": null,
                      "57525": null,
                      "57567": null,
                      "57618": null,
                      "57673": null,
                      "57777": null,
                      "57829": null,
                      "57943": null,
                      "57954": null,
                      "57992": null,
                      "57999": null,
                      "58038": null,
                      "58042": null,
                      "58059": null,
                      "58077": null,
                      "58134": null,
                      "58183": null,
                      "58267": null,
                      "58303": null,
                      "58316": null,
                      "58373": null,
                      "58377": null,
                      "58512": null,
                      "58526": null,
                      "58642": null,
                      "58725": null,
                      "58826": null,
                      "58902": null,
                      "58918": null,
                      "58937": null,
                      "58988": null,
                      "59129": null,
                      "59198": null,
                      "59200": null,
                      "59256": null,
                      "59339": null,
                      "59355": null,
                      "59374": null,
                      "59424": null,
                      "59563": null,
                      "59611": null,
                      "59613": null,
                      "59761": null,
                      "59792": null,
                      "59806": null,
                      "60015": null,
                      "60038": null,
                      "60063": null,
                      "60084": null,
                      "60125": null,
                      "60178": null,
                      "60220": null,
                      "60385": null,
                      "60406": null,
                      "60411": null,
                      "60422": null,
                      "60456": null,
                      "60555": null,
                      "60674": null,
                      "60698": null,
                      "60801": null,
                      "60882": null,
                      "60916": null,
                      "60969": null,
                      "61059": null,
                      "61067": null,
                      "61112": null,
                      "61132": null,
                      "61138": null,
                      "61165": null,
                      "61169": null,
                      "61226": null,
                      "61291": null,
                      "61317": null,
                      "61323": null,
                      "61325": null,
                      "61357": null,
                      "61379": null,
                      "61391": null,
                      "61527": null,
                      "61531": null,
                      "61538": null,
                      "61543": null,
                      "61566": null,
                      "61581": null,
                      "61671": null,
                      "61686": null,
                      "61706": null,
                      "61714": null,
                      "61716": null,
                      "61717": null,
                      "61754": null,
                      "61758": null,
                      "61835": null,
                      "61856": null,
                      "61925": null,
                      "61932": null,
                      "61945": null,
                      "61982": null,
                      "61996": null,
                      "62044": null,
                      "62046": null,
                      "62055": null,
                      "62087": null,
                      "62808": null,
                      "62936": null,
                      "63628": null,
                      "64009": null,
                      "64427": null,
                      "66213": null,
                      "66396": null,
                      "66641": null,
                      "67466": null,
                      "67797": null,
                      "68430": null,
                      "68548": null,
                      "69612": null,
                      "72461": null,
                      "74224": null,
                      "76732": null,
                      "77467": null,
                      "77711": null,
                      "78322": null,
                      "78333": null,
                      "78709": null,
                      "79275": null,
                      "79315": null,
                      "79717": null,
                      "79986": null,
                      "80051": null,
                      "80164": null,
                      "80219": null,
                      "80582": null,
                      "80605": null,
                      "80677": null,
                      "82392": null,
                      "83517": null,
                      "86346": null,
                      "87520": null,
                      "87955": null,
                      "91031": null,
                      "91513": null,
                      "91854": null,
                      "92268": null,
                      "92486": null,
                      "93505": null,
                      "94113": null,
                      "95568": null,
                      "96208": null,
                      "96621": null,
                      "96646": null,
                      "97063": null,
                      "97102": null,
                      "97502": null,
                      "97661": null,
                      "97851": null,
                      "98071": null,
                      "98083": null,
                      "98254": null,
                      "98395": null,
                      "112300": null,
                      "112656": null,
                      "112979": null,
                      "113580": null,
                      "113801": null,
                      "115334": null,
                      "117237": null,
                      "117512": null,
                      "119745": null,
                      "120629": null,
                      "121242": null,
                      "122096": null,
                      "123412": null,
                      "123455": null,
                      "124743": null,
                      "126347": null,
                      "126795": null,
                      "127343": null,
                      "127852": null,
                      "128973": null,
                      "129085": null,
                      "131503": null,
                      "131972": null,
                      "132270": null,
                      "132885": null,
                      "133199": null,
                      "133911": null,
                      "134902": null,
                      "135210": null,
                      "135566": null,
                      "135671": null,
                      "136037": null,
                      "136039": null,
                      "136222": null,
                      "136304": null,
                      "136618": null,
                      "137292": null,
                      "138557": null,
                      "140629": null,
                      "142368": null,
                      "142521": null,
                      "146606": null,
                      "147177": null,
                      "148386": null,
                      "149441": null,
                      "150869": null,
                      "151116": null,
                      "151529": null,
                      "151663": null,
                      "153032": null,
                      "154200": null,
                      "154619": null,
                      "155403": null,
                      "156221": null,
                      "157848": null,
                      "158114": null,
                      "159234": null,
                      "160630": null,
                      "161758": null,
                      "162767": null,
                      "163187": null,
                      "163369": null,
                      "166135": null,
                      "169251": null,
                      "169762": null,
                      "170699": null,
                      "171122": null,
                      "171374": null,
                      "172172": null,
                      "172250": null,
                      "172670": null,
                      "172993": null,
                      "174005": null,
                      "174102": null,
                      "175653": null,
                      "175682": null,
                      "176233": null,
                      "176457": null,
                      "176645": null,
                      "177596": null,
                      "177748": null,
                      "179204": null,
                      "179564": null,
                      "179573": null,
                      "181085": null,
                      "181377": null,
                      "183792": null,
                      "184919": null,
                      "185468": null,
                      "185475": null,
                      "186202": null,
                      "187433": null,
                      "188199": null,
                      "188241": null,
                      "188306": null,
                      "188507": null,
                      "188662": null,
                      "188812": null,
                      "188878": null,
                      "188931": null,
                      "188956": null,
                      "189534": null,
                      "189585": null,
                      "189647": null,
                      "189703": null,
                      "190327": null,
                      "196340": null,
                      "197595": null,
                      "197697": null,
                      "210291": null,
                      "210864": null,
                      "211202": null,
                      "211509": null,
                      "211772": null,
                      "211786": null,
                      "211955": null,
                      "212078": null,
                      "212413": null,
                      "212601": null,
                      "212762": null,
                      "213078": null,
                      "213374": null,
                      "213688": null,
                      "213694": null,
                      "213887": null,
                      "214428": null,
                      "214600": null,
                      "215147": null,
                      "216302": null,
                      "217228": null,
                      "217366": null,
                      "217509": null,
                      "219500": null,
                      "219645": null,
                      "220113": null
                    },
                    "15 tablets": {
                      "49584": null,
                      "62425": null,
                      "76758": null,
                      "117803": null
                    },
                    "8 tablets": {
                      "138417": null
                    }
                  },
                  "50mg+500mg": {
                    "10 tablets": {
                      "2415": null,
                      "4260": null,
                      "5475": null,
                      "5513": null,
                      "5820": null,
                      "6233": null,
                      "6681": null,
                      "6915": null,
                      "7516": null,
                      "8634": null,
                      "8981": null,
                      "10832": null,
                      "13073": null,
                      "13075": null,
                      "13418": null,
                      "14131": null,
                      "14228": null,
                      "15328": null,
                      "18239": null,
                      "19535": null,
                      "20432": null,
                      "20674": null,
                      "23350": null,
                      "24124": null,
                      "25940": null,
                      "26278": null,
                      "26330": null,
                      "27391": null,
                      "29534": null,
                      "31759": null,
                      "33203": null,
                      "33491": null,
                      "35622": null,
                      "35835": null,
                      "35868": null,
                      "40711": null,
                      "44032": null,
                      "45936": null,
                      "48692": null,
                      "49328": null,
                      "49333": null,
                      "49562": null,
                      "49715": null,
                      "49759": null,
                      "49794": null,
                      "49802": null,
                      "50112": null,
                      "50249": null,
                      "50314": null,
                      "50419": null,
                      "50515": null,
                      "50572": null,
                      "50594": null,
                      "50631": null,
                      "50838": null,
                      "50888": null,
                      "50911": null,
                      "50935": null,
                      "51124": null,
                      "51338": null,
                      "51547": null,
                      "51668": null,
                      "51671": null,
                      "51686": null,
                      "51698": null,
                      "51766": null,
                      "51956": null,
                      "51987": null,
                      "52056": null,
                      "52108": null,
                      "52266": null,
                      "52419": null,
                      "52480": null,
                      "52512": null,
                      "52560": null,
                      "52649": null,
                      "52818": null,
                      "52850": null,
                      "52973": null,
                      "53137": null,
                      "53167": null,
                      "53188": null,
                      "53221": null,
                      "53240": null,
                      "53415": null,
                      "53470": null,
                      "53506": null,
                      "53563": null,
                      "53588": null,
                      "53590": null,
                      "53635": null,
                      "53704": null,
                      "53718": null,
                      "53733": null,
                      "53775": null,
                      "53810": null,
                      "53895": null,
                      "53920": null,
                      "54159": null,
                      "54445": null,
                      "54520": null,
                      "54817": null,
                      "54894": null,
                      "54962": null,
                      "54983": null,
                      "55006": null,
                      "55007": null,
                      "55075": null,
                      "55150": null,
                      "55255": null,
                      "55460": null,
                      "55466": null,
                      "55548": null,
                      "55564": null,
                      "55691": null,
                      "55914": null,
                      "56120": null,
                      "56160": null,
                      "56183": null,
                      "56191": null,
                      "56192": null,
                      "56336": null,
                      "56578": null,
                      "56853": null,
                      "57182": null,
                      "57190": null,
                      "57219": null,
                      "57273": null,
                      "57310": null,
                      "57406": null,
                      "57620": null,
                      "57626": null,
                      "57690": null,
                      "57709": null,
                      "57872": null,
                      "57886": null,
                      "58043": null,
                      "58087": null,
                      "58280": null,
                      "58359": null,
                      "58478": null,
                      "58547": null,
                      "58598": null,
                      "58807": null,
                      "58815": null,
                      "58821": null,
                      "58852": null,
                      "58999": null,
                      "59321": null,
                      "59330": null,
                      "59387": null,
                      "59506": null,
                      "59539": null,
                      "59580": null,
                      "59815": null,
                      "59919": null,
                      "60009": null,
                      "60170": null,
                      "60254": null,
                      "60486": null,
                      "60494": null,
                      "60495": null,
                      "60682": null,
                      "60686": null,
                      "60939": null,
                      "61111": null,
                      "61293": null,
                      "61355": null,
                      "61442": null,
                      "61820": null,
                      "62023": null,
                      "62621": null,
                      "63604": null,
                      "64149": null,
                      "64811": null,
                      "67927": null,
                      "68526": null,
                      "72151": null,
                      "72629": null,
                      "72884": null,
                      "73677": null,
                      "73801": null,
                      "73842": null,
                      "73866": null,
                      "74912": null,
                      "75176": null,
                      "75302": null,
                      "75315": null,
                      "75397": null,
                      "76476": null,
                      "77082": null,
                      "77204": null,
                      "77448": null,
                      "77483": null,
                      "78701": null,
                      "78738": null,
                      "79737": null,
                      "79875": null,
                      "80107": null,
                      "89533": null,
                      "90603": null,
                      "92131": null,
                      "92257": null,
                      "92619": null,
                      "92634": null,
                      "92891": null,
                      "93365": null,
                      "95315": null,
                      "95650": null,
                      "96243": null,
                      "98069": null,
                      "98714": null,
                      "99085": null,
                      "111873": null,
                      "112207": null,
                      "112475": null,
                      "113454": null,
                      "114131": null,
                      "114238": null,
                      "115341": null,
                      "118335": null,
                      "119398": null,
                      "120837": null,
                      "120892": null,
                      "121628": null,
                      "121912": null,
                      "122687": null,
                      "125722": null,
                      "126177": null,
                      "127161": null,
                      "128781": null,
                      "131032": null,
                      "132074": null,
                      "132820": null,
                      "134152": null,
                      "134870": null,
                      "135446": null,
                      "135634": null,
                      "137567": null,
                      "140574": null,
                      "141891": null,
                      "142648": null,
                      "145106": null,
                      "145944": null,
                      "146901": null,
                      "147644": null,
                      "148553": null,
                      "149219": null,
                      "149303": null,
                      "149643": null,
                      "149657": null,
                      "150530": null,
                      "150953": null,
                      "151955": null,
                      "152172": null,
                      "152215": null,
                      "154390": null,
                      "154514": null,
                      "154566": null,
                      "155016": null,
                      "155576": null,
                      "156155": null,
                      "158021": null,
                      "160782": null,
                      "165985": null,
                      "166645": null,
                      "168085": null,
                      "170390": null,
                      "171043": null,
                      "171412": null,
                      "171650": null,
                      "171664": null,
                      "174863": null,
                      "178660": null,
                      "180246": null,
                      "183860": null,
                      "184090": null,
                      "184237": null,
                      "184325": null,
                      "185002": null,
                      "185221": null,
                      "187573": null,
                      "190664": null,
                      "190856": null,
                      "193723": null,
                      "195666": null,
                      "196703": null,
                      "197900": null,
                      "198977": null,
                      "199233": null,
                      "210311": null,
                      "210905": null,
                      "211163": null,
                      "211420": null,
                      "211750": null,
                      "211856": null,
                      "212368": null,
                      "213123": null,
                      "216339": null,
                      "216794": null,
                      "220677": null,
                      "221518": null,
                      "221539": null,
                      "223035": null,
                      "223108": null
                    },
                    "20 tablets": {
                      "52207": null,
                      "133906": null
                    },
                    "300 tablets": {
                      "52418": null
                    },
                    "15 tablets": {
                      "50590": null,
                      "65529": null
                    },
                    "25 tablets": {
                      "11625": null
                    }
                  },
                  "500mg+500mg": {
                    "10 tablets": {
                      "50701": null
                    }
                  },
                  "50mg+650mg": {
                    "10 tablets": {
                      "51068": null,
                      "57803": null,
                      "74369": null,
                      "93571": null,
                      "139819": null,
                      "156614": null,
                      "212029": null
                    },
                    "20 tablets": {
                      "60522": null
                    }
                  },
                  "100mg+325mg": {
                    "10 tablets": {
                      "56270": null,
                      "56778": null,
                      "58664": null,
                      "86869": null
                    },
                    "6 tablets": {
                      "133371": null
                    }
                  },
                  "400mg+500mg": {
                    "10 tablets": {
                      "94486": null
                    }
                  },
                  "50mg+125mg": {
                    "10 tablets": {
                      "134222": null
                    }
                  },
                  "100mg+500mg": {
                    "10 tablets": {
                      "140381": null,
                      "198360": null
                    },
                    "100 tablets": {
                      "10660": null
                    }
                  },
                  "100mg+400mg": {
                    "10 tablets": {
                      "217505": null
                    }
                  },
                  "30mg+50mg": {
                    "10 tablets": {
                      "94538": null
                    }
                  },
                  "50mg+100mg": {
                    "10 tablets": {
                      "149194": null
                    }
                  },
                  "50mg+10mg": {
                    "10 tablets": {
                      "28818": null
                    }
                  },
                  "25mg+500mg": {
                    "10 tablets": {
                      "58035": null
                    }
                  },
                  "50mg+350mg": {
                    "10 tablets": {
                      "50821": null
                    }
                  },
                  "500mg+325mg": {
                    "10 tablets": {
                      "61192": null
                    }
                  }
                },
                "Injection": {
                  "25mg+75mg": {
                    "3 ml": {
                      "13465": null,
                      "54244": null,
                      "58741": null,
                      "60168": null,
                      "60496": null,
                      "60784": null,
                      "76833": null,
                      "91527": null,
                      "213356": null
                    },
                    "1 ml": {
                      "59636": null
                    }
                  },
                  "50mg+500mg": {
                    "3 ml": {
                      "57127": null
                    }
                  },
                  "75mg+225mg": {
                    "3 ml": {
                      "165512": null
                    }
                  }
                },
                "Capsule": {
                  "25mg+325mg": {
                    "10 capsules": {
                      "51842": null,
                      "217480": null
                    }
                  },
                  "50mg+325mg": {
                    "10 capsules": {
                      "22673": null,
                      "128580": null,
                      "172023": null
                    }
                  }
                },
                "Oral Liquid": {
                  "50mg+500mg": {
                    "60 ml": {
                      "130951": null
                    }
                  },
                  "100mg+125mg": {
                    "60 ml": {
                      "157552": null
                    }
                  }
                }
              }
            },
            {
              "id": 886,
              "salt": "Flupirtine+Paracetamol",
              "salt_frequency": 30,
              "available_forms": [
                "Tablet",
                "Capsule"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "100mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "100mg+325mg": {
                    "10 tablets": {
                      "2124": null,
                      "3367": null,
                      "63123": null,
                      "72611": null,
                      "72742": null,
                      "73064": null,
                      "73268": null,
                      "73525": null,
                      "73607": null,
                      "73897": null,
                      "74479": null,
                      "74831": null,
                      "75944": null,
                      "76383": null,
                      "76559": null,
                      "77025": null,
                      "77071": null,
                      "77299": null,
                      "77833": null,
                      "81241": null,
                      "81264": null,
                      "98532": null,
                      "98906": null,
                      "120615": null,
                      "147940": null,
                      "148333": null,
                      "152221": null,
                      "167004": null,
                      "167901": null
                    }
                  }
                },
                "Capsule": {
                  "100mg+325mg": {
                    "10 capsules": {
                      "64573": null
                    }
                  }
                }
              }
            },
            {
              "id": 519,
              "salt": "Etoricoxib+Paracetamol",
              "salt_frequency": 161,
              "available_forms": [
                "Tablet"
              ],
              "most_common": {
                "Form": "Tablet",
                "Strength": "60mg+325mg",
                "Packing": "10 tablets"
              },
              "salt_forms_json": {
                "Tablet": {
                  "60mg+325mg": {
                    "10 tablets": {
                      "3167": null,
                      "7303": null,
                      "10733": null,
                      "13278": null,
                      "15775": null,
                      "17377": null,
                      "20255": null,
                      "22712": null,
                      "24644": null,
                      "26515": null,
                      "26621": null,
                      "27520": null,
                      "32846": null,
                      "33210": null,
                      "33834": null,
                      "33889": null,
                      "34727": null,
                      "36998": null,
                      "37950": null,
                      "39091": null,
                      "39255": null,
                      "41831": null,
                      "44361": null,
                      "49116": null,
                      "54134": null,
                      "57951": null,
                      "61309": null,
                      "62283": null,
                      "62328": null,
                      "62515": null,
                      "62901": null,
                      "63113": null,
                      "63476": null,
                      "63608": null,
                      "63697": null,
                      "63887": null,
                      "63973": null,
                      "64018": null,
                      "64070": null,
                      "64089": null,
                      "64116": null,
                      "64166": null,
                      "64495": null,
                      "64554": null,
                      "64556": null,
                      "64708": null,
                      "65028": null,
                      "65308": null,
                      "65337": null,
                      "65588": null,
                      "65601": null,
                      "65832": null,
                      "65927": null,
                      "65931": null,
                      "65999": null,
                      "66150": null,
                      "66248": null,
                      "66294": null,
                      "66460": null,
                      "66487": null,
                      "66532": null,
                      "66533": null,
                      "66782": null,
                      "66957": null,
                      "66958": null,
                      "67049": null,
                      "67088": null,
                      "67398": null,
                      "67496": null,
                      "67500": null,
                      "67698": null,
                      "67726": null,
                      "67802": null,
                      "67827": null,
                      "67919": null,
                      "67983": null,
                      "68116": null,
                      "68117": null,
                      "68160": null,
                      "68387": null,
                      "68420": null,
                      "68423": null,
                      "68505": null,
                      "68595": null,
                      "68734": null,
                      "68922": null,
                      "69023": null,
                      "69208": null,
                      "69428": null,
                      "69498": null,
                      "69995": null,
                      "70066": null,
                      "70600": null,
                      "70679": null,
                      "70820": null,
                      "70854": null,
                      "70918": null,
                      "71156": null,
                      "71469": null,
                      "71496": null,
                      "71530": null,
                      "71659": null,
                      "71663": null,
                      "71736": null,
                      "72110": null,
                      "72127": null,
                      "72146": null,
                      "72147": null,
                      "78900": null,
                      "81962": null,
                      "83380": null,
                      "84830": null,
                      "91511": null,
                      "92280": null,
                      "96674": null,
                      "117123": null,
                      "124167": null,
                      "126415": null,
                      "129804": null,
                      "131287": null,
                      "136251": null,
                      "141126": null,
                      "141875": null,
                      "141991": null,
                      "143247": null,
                      "144505": null,
                      "145780": null,
                      "149425": null,
                      "154289": null,
                      "159092": null,
                      "160842": null,
                      "166447": null,
                      "173731": null,
                      "173956": null,
                      "173984": null,
                      "174315": null,
                      "174909": null,
                      "175345": null,
                      "184552": null,
                      "186782": null,
                      "189322": null,
                      "192625": null,
                      "195254": null,
                      "197235": null,
                      "198773": null,
                      "199413": null,
                      "211021": null,
                      "213707": null,
                      "215369": null,
                      "216635": null,
                      "217784": null,
                      "217950": null,
                      "219351": null,
                      "220970": null
                    }
                  },
                  "60mg+500mg": {
                    "10 tablets": {
                      "4941": null,
                      "39821": null,
                      "63464": null,
                      "69680": null,
                      "219213": null
                    }
                  },
                  "90mg+325mg": {
                    "10 tablets": {
                      "11602": null,
                      "66393": null
                    }
                  }
                }
              }
            }
          ],
          "medicineSuggestions": [
            {
              "id": 97342,
              "product_id": 97342,
              "name_with_short_pack": "Jackson Paracetamol 500 Tablet - 10 tablets",
              "manufacturer_name": "Jackson Laboratories  ",
              "salt_full": "Paracetamol 500mg Tablet",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 16,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 53410,
              "product_id": 53410,
              "name_with_short_pack": "DR Best Paracetamol 250 Oral Suspension - 60 ml",
              "manufacturer_name": "Dr Best Pharmaceuticals  ",
              "salt_full": "Paracetamol 250mg Oral Suspension",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 25,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 54001,
              "product_id": 54001,
              "name_with_short_pack": "DavaIndia Paracetamol 500mg Tablet - 10 tablets",
              "manufacturer_name": "Davaindia Generic Pharmacy",
              "salt_full": "Paracetamol 500mg Tablet",
              "salt_or_category": "Paracetamol",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 7,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 55089,
              "product_id": 55089,
              "name_with_short_pack": "DavaIndia Paracetamol 650mg Tablet - 10 tablets",
              "manufacturer_name": "Davaindia Generic Pharmacy",
              "salt_full": "Paracetamol 650mg Tablet",
              "salt_or_category": "Paracetamol",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 10,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 82642,
              "product_id": 82642,
              "name_with_short_pack": "Genericart Paracetamol 500mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Paracetamol 500mg Tablet",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 9.52,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 81981,
              "product_id": 81981,
              "name_with_short_pack": "Genericart Paracetamol 650mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Paracetamol 650mg Tablet",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 20.16,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 49328,
              "product_id": 49328,
              "name_with_short_pack": "Diclofenac Sodium & Paracetamol 50mg/500mg Tablet - 10 tablets",
              "manufacturer_name": "Blue Cross Laboratories ",
              "salt_full": "Diclofenac+Paracetamol 50mg+500mg Tablet",
              "salt_or_category": "Diclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 58.28,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 81962,
              "product_id": 81962,
              "name_with_short_pack": "Genericart Etoricoxib+Paracetamol 60mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Etoricoxib+Paracetamol 60mg+325mg Tablet",
              "salt_or_category": "Etoricoxib+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 109,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 56932,
              "product_id": 56932,
              "name_with_short_pack": "DavaIndia Diclofenac+Paracetamol 50mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Davaindia Generic Pharmacy",
              "salt_full": "Diclofenac+Paracetamol 50mg+325mg Tablet",
              "salt_or_category": "Diclofenac+Paracetamol",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 12,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 53745,
              "product_id": 53745,
              "name_with_short_pack": "DavaIndia Nimesulide+Paracetamol 100mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Davaindia Generic Pharmacy",
              "salt_full": "Nimesulide+Paracetamol 100mg+325mg Tablet",
              "salt_or_category": "Nimesulide+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 12,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 86909,
              "product_id": 86909,
              "name_with_short_pack": "Genericart Nimesulide+Paracetamol 100mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Nimesulide+Paracetamol 100mg+325mg Tablet",
              "salt_or_category": "Nimesulide+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 40,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 51970,
              "product_id": 51970,
              "name_with_short_pack": "DavaIndia Aceclofenac+Paracetamol 100mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Davaindia Generic Pharmacy",
              "salt_full": "Aceclofenac+Paracetamol 100mg+325mg Tablet",
              "salt_or_category": "Aceclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 12,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 81955,
              "product_id": 81955,
              "name_with_short_pack": "Genericart Aceclofenac+Paracetamol 100mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Aceclofenac+Paracetamol 100mg+325mg Tablet",
              "salt_or_category": "Aceclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 47,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 55279,
              "product_id": 55279,
              "name_with_short_pack": "DavaIndia Diclofenac+Paracetamol+Serratiopeptidase 50mg/325mg/10mg Tablet - 10 tablets",
              "manufacturer_name": "Davaindia Generic Pharmacy",
              "salt_full": "Diclofenac+Paracetamol+Serratiopeptidase 50mg+325mg+10mg Tablet",
              "salt_or_category": "Diclofenac+Paracetamol+Serratiopeptidase",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 22,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 87096,
              "product_id": 87096,
              "name_with_short_pack": "Genericart Diclofenac+Paracetamol+Serratiopeptidase 50mg/325mg/10mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Diclofenac+Paracetamol+Serratiopeptidase 50mg+325mg+10mg Tablet",
              "salt_or_category": "Diclofenac+Paracetamol+Serratiopeptidase",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 81,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 84404,
              "product_id": 84404,
              "name_with_short_pack": "Genericart Thiocolchicoside+Aceclofenac+Paracetamol 4mg/100mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Thiocolchicoside+Aceclofenac+Paracetamol 4mg+100mg+325mg Tablet",
              "salt_or_category": "Thiocolchicoside+Aceclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 205,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 83722,
              "product_id": 83722,
              "name_with_short_pack": "Genericart Aceclofenac+Paracetamol+Chlorzoxazone 100mg/325mg/250mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Aceclofenac+Paracetamol+Chlorzoxazone 100mg+325mg+250mg Tablet",
              "salt_or_category": "Aceclofenac+Paracetamol+Chlorzoxazone",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 82,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 83158,
              "product_id": 83158,
              "name_with_short_pack": "Genericart Aceclofenac+Paracetamol+Serratiopeptidase 100mg/325mg/15mg Tablet - 10 tablets",
              "manufacturer_name": "Swast Aushadhi Seva Generic Medicine Store",
              "salt_full": "Aceclofenac+Paracetamol+Serratiopeptidase 100mg+325mg+15mg Tablet",
              "salt_or_category": "Aceclofenac+Paracetamol+Serratiopeptidase",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 98,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 54437,
              "product_id": 54437,
              "name_with_short_pack": "DavaIndia Piracetam 400mg Tablet - 10 tablets",
              "manufacturer_name": "Davaindia Generic Pharmacy",
              "salt_full": "Piracetam 400mg Tablet",
              "salt_or_category": "Piracetam",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 28,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 58845,
              "product_id": 58845,
              "name_with_short_pack": "DV Para 650mg Tablet - 10 tablets",
              "manufacturer_name": "Dvm Life Sciences  ",
              "salt_full": "Paracetamol 650mg Tablet",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 19,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 114078,
              "product_id": 114078,
              "name_with_short_pack": "Mef Para Kid Syrup - 60 ml",
              "manufacturer_name": "Rozer Pharmaceuticals  ",
              "salt_full": "Mefenamic Acid+Paracetamol 50mg+125mg Syrup",
              "salt_or_category": "Mefenamic Acid+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 80,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 53926,
              "product_id": 53926,
              "name_with_short_pack": "DavaIndia Citicoline+Piracetam 500mg/800mg Tablet - 10 tablets",
              "manufacturer_name": "Davaindia Generic Pharmacy",
              "salt_full": "Citicoline+Piracetam 500mg+800mg Tablet",
              "salt_or_category": "Citicoline+Piracetam",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 280,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 58243,
              "product_id": 58243,
              "name_with_short_pack": "DV-Para Oral Drop Banana - 15 ml",
              "manufacturer_name": "Dvm Life Sciences  ",
              "salt_full": "Paracetamol 125mg Oral Suspension",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 30,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 60283,
              "product_id": 60283,
              "name_with_short_pack": "DV Para 250mg Oral Suspension - 60 ml",
              "manufacturer_name": "Dvm Life Sciences  ",
              "salt_full": "Paracetamol 250mg Oral Suspension",
              "salt_or_category": "Paracetamol",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 35,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 1535,
              "product_id": 1535,
              "name_with_short_pack": "AC Para 100mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Mmc Healthcare ",
              "salt_full": "Aceclofenac+Paracetamol 100mg+325mg Tablet",
              "salt_or_category": "Aceclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 57,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 13249,
              "product_id": 13249,
              "name_with_short_pack": "AD Para 100mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Rbs Pharmaceutical",
              "salt_full": "Aceclofenac+Paracetamol 100mg+325mg Tablet",
              "salt_or_category": "Aceclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 45,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 129074,
              "product_id": 129074,
              "name_with_short_pack": "Nimek Para Plus Suspension - 60 ml",
              "manufacturer_name": "J B Chemicals And Pharmaceuticals ",
              "salt_full": "Mefenamic Acid+Paracetamol 50mg/5ml+125mg/5ml Suspension",
              "salt_or_category": "Mefenamic Acid+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 41.5,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 5230,
              "product_id": 5230,
              "name_with_short_pack": "Ace Q Para 100mg/500mg Tablet - 10 tablets",
              "manufacturer_name": "Q Check Speciality Care",
              "salt_full": "Aceclofenac+Paracetamol 100mg+500mg Tablet",
              "salt_or_category": "Aceclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 38,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 127084,
              "product_id": 127084,
              "name_with_short_pack": "Nimek Para 100mg/325mg Tablet - 15 tablets",
              "manufacturer_name": "J B Chemicals And Pharmaceuticals ",
              "salt_full": "Nimesulide+Paracetamol 100mg+325mg Tablet",
              "salt_or_category": "Nimesulide+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 95.78,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 254902,
              "product_id": 253635,
              "name_with_short_pack": "Khadi Herbal Face Wash (SLS Paraben Free) - Haldi Chandan 210 ml",
              "manufacturer_name": "Cielo Ecommerce Consultant",
              "salt_or_category": "Personal Care",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 290,
              "is_healthProduct": true,
              "availability": null
            },
            {
              "id": 6090,
              "product_id": 6090,
              "name_with_short_pack": "Ag Para Plus 100mg/325mg/15mg Tablet - 10 tablets",
              "manufacturer_name": "Ags Pharmaceuticals  ",
              "salt_full": "Aceclofenac+Paracetamol+Serratiopeptidase 100mg+325mg+15mg Tablet",
              "salt_or_category": "Aceclofenac+Paracetamol+Serratiopeptidase",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 75,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 247205,
              "product_id": 247005,
              "name_with_short_pack": "Agrawal Liquid Paraffin I.P. 100 ml",
              "manufacturer_name": "Agrawal Drugs  Limited",
              "salt_or_category": "Others",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 86,
              "is_healthProduct": true,
              "availability": null
            },
            {
              "id": 99240,
              "product_id": 99240,
              "name_with_short_pack": "K Par 650mg Tablet - 10 tablets",
              "manufacturer_name": "Kineses Laboratories",
              "salt_full": "Paracetamol 650mg Tablet",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 20.9,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 94217,
              "product_id": 94217,
              "name_with_short_pack": "I Par 100mg/125mg Syrup - 60 ml",
              "manufacturer_name": "Beulah Biomedics ",
              "salt_full": "Ibuprofen+Paracetamol 100mg+125mg Syrup",
              "salt_or_category": "Ibuprofen+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 17.18,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 50300,
              "product_id": 50300,
              "name_with_short_pack": "D Par 50mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Themis Medicare ",
              "salt_full": "Diclofenac+Paracetamol 50mg+325mg Tablet",
              "salt_or_category": "Diclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 30,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 130626,
              "product_id": 130626,
              "name_with_short_pack": "N Par 100mg/325mg Tablet - 10 tablets",
              "manufacturer_name": "Shiron Pharmaceuticals",
              "salt_full": "Nimesulide+Paracetamol 100mg+325mg Tablet",
              "salt_or_category": "Nimesulide+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 30,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 75423,
              "product_id": 75423,
              "name_with_short_pack": "FORACET 500MG/15MG TABLET - 12 tablets",
              "manufacturer_name": "Ranbaxy Laboratories ",
              "salt_full": "Paracetamol+Pentazocine 500mg+15mg Tablet",
              "salt_or_category": "Paracetamol+Pentazocine",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 10,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 257334,
              "product_id": 255504,
              "name_with_short_pack": "Patanjali Divya Panchamrit Parpati Powder 5 gm",
              "manufacturer_name": "Patanjali Ayurved ",
              "salt_or_category": "Others",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 22,
              "is_healthProduct": true,
              "availability": null
            },
            {
              "id": 132631,
              "product_id": 132631,
              "name_with_short_pack": "New Panazox Tablet - 10 tablets",
              "manufacturer_name": "Cadila Pharmaceuticals ",
              "salt_full": "Chlorzoxazone+Diclofenac+Paracetamol 250mg+50mg+500mg Tablet",
              "salt_or_category": "Chlorzoxazone+Diclofenac+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 50.02,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 79276,
              "product_id": 79276,
              "name_with_short_pack": "Fine Par-DS Oral Suspension - 60 ml",
              "manufacturer_name": "Finex Healthcare  ",
              "salt_full": "Mefenamic Acid+Paracetamol 100mg/5ml+250mg/5ml Oral Suspension",
              "salt_or_category": "Mefenamic Acid+Paracetamol",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 48,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 29843,
              "product_id": 29843,
              "name_with_short_pack": "Calpol Paediatric Drops - 15 ml",
              "manufacturer_name": "Glaxosmithkline Pharmaceuticals ",
              "salt_full": "Paracetamol 100mg/ml Oral Suspension",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 27.2,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 248411,
              "product_id": 247915,
              "name_with_short_pack": "Basic Ayurveda Herbal Param Shakti Dayak Capsule 30's",
              "manufacturer_name": "Kradha Enterprises",
              "salt_or_category": "AYUSH",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 180,
              "is_healthProduct": true,
              "availability": null
            },
            {
              "id": 253727,
              "product_id": 252600,
              "name_with_short_pack": "Herbal Canada Premium Param Shakti Dayak Juice 500 ml",
              "manufacturer_name": "Herbal Canada",
              "salt_or_category": "Nutrition",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 270,
              "is_healthProduct": true,
              "availability": null
            },
            {
              "id": 14632,
              "product_id": 14632,
              "name_with_short_pack": "Aprofen Syrup - 60 ml",
              "manufacturer_name": "Agrawal Pharmaceuticals",
              "salt_full": "Paracetamol 100mg Syrup",
              "salt_or_category": "Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 30,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 50165,
              "product_id": 50165,
              "name_with_short_pack": "Duracet 325mg/37.5mg Tablet - 10 tablets",
              "manufacturer_name": "Rhine Biogenics  ",
              "salt_full": "Paracetamol/Acetaminophen + Tramadol 325mg+37.5mg Tablet",
              "salt_or_category": "Paracetamol/Acetaminophen + Tramadol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 59,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 22669,
              "product_id": 22669,
              "name_with_short_pack": "Baralgan NU Tablet - 10 tablets",
              "manufacturer_name": "Sanofi India  ",
              "salt_full": "Dicyclomine+Paracetamol 20mg+500mg Tablet",
              "salt_or_category": "Dicyclomine+Paracetamol",
              "prescription_req": false,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 38.89,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 31440,
              "product_id": 31440,
              "name_with_short_pack": "Crocimax 1000SR Tablet - 10 tablet sr",
              "manufacturer_name": "Parnasa Mediworld  ",
              "salt_full": "Paracetamol+Paracetamol 300mg+700mg Tablet SR",
              "salt_or_category": "Paracetamol+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 89,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 75341,
              "product_id": 75341,
              "name_with_short_pack": "Frimol-SR Tablet - 10 tablet sr",
              "manufacturer_name": "Friska Nutraceuticals  ",
              "salt_full": "Paracetamol+Paracetamol 300mg+700mg Tablet SR",
              "salt_or_category": "Paracetamol+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 99,
              "is_healthProduct": false,
              "availability": [
                {
                  "pharmacy_id": 2,
                  "selling_price": 80
                },
                {
                  "pharmacy_id": 1,
                  "selling_price": 90
                }
              ]
            },
            {
              "id": 92010,
              "product_id": 92010,
              "name_with_short_pack": "Instaflex P Tablet SR - 10 tablet ir",
              "manufacturer_name": "Innovcare Lifesciences  ",
              "salt_full": "Paracetamol+Paracetamol 300mg+700mg Tablet IR",
              "salt_or_category": "Paracetamol+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 56,
              "is_healthProduct": false,
              "availability": null
            },
            {
              "id": 118348,
              "product_id": 118348,
              "name_with_short_pack": "Maxmol 300mg/700mg Tablet SR - 10 tablet sr",
              "manufacturer_name": "Maxamus Pharma  ",
              "salt_full": "Paracetamol+Paracetamol 300mg+700mg Tablet SR",
              "salt_or_category": "Paracetamol+Paracetamol",
              "prescription_req": true,
              "images_link": [
                "https://cappsule.blr1.cdn.digitaloceanspaces.com/medicine/default_pic.svg"
              ],
              "mrp": 45,
              "is_healthProduct": false,
              "availability": null
            }
          ]
        }
      };
      
    //http://localhost:3000/api/product?search=Paracetamol
    if(req.query.search){
        const filterProduct=  products.data.saltSuggestions.filter(product => 
            product.salt.includes(req.query.search)
)
        res.send(filterProduct);
        return ; //important
    }
    
    //to simmulate the api 2s
    const timeout=2000
    setTimeout(() => {
        res.send(products)
    }, timeout);
})



const port=process.env.PORT || 3000;

app.listen(port,()  => {
    console.log(`listening on port ${port}`);
});
