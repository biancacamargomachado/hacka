import React from 'react';
import Button from '../../components/button';
import {CheckBox, FlatList} from 'react-native-elements';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Questoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [
        {
          checked: false,
          title: 'Teatro',
        },
        {
          checked: false,
          title: 'Shows',
        },
        {
          checked: false,
          title: 'Livros',
        },
        {
          checked: false,
          title: 'Cinema',
        },
        {
          checked: false,
          title: 'Restaurantes',
        },
        {
          checked: false,
          title: 'Outros',
        },
      ],
    };
  }

  static navigationOptions = {
    headerStyle: {backgroundColor: 'red'},
  };

  render() {
    const {navigate} = this.props.navigation;
    const {width, height} = Dimensions.get('window');

    const onSelect = (id, title) => {
      const {dados} = this.state;
      console.warn(dados);
      return this.setState(prevState => ({
        dados: prevState.dados.map(el =>
          el.id === id ? {...el, checked: !el.checked} : el,
        ),
      }));
    };

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
              style={{
                backgroundColor: '#DCDCDC',
                flex: 1,
                width: width,
                height: height,
              }}>
              <Text
                style={{
                  fontFamily: 'Gudea',
                  fontWeight: 'bold',
                  fontSize: 30,
                  lineHeight: 30,
                  color: '#1B1918',
                  marginLeft: 30,
                  marginTop: 30,
                }}>
                Legal!
              </Text>
              <Text
                style={{
                  fontFamily: 'Gudea',
                  fontWeight: 'bold',
                  fontSize: 15,
                  lineHeight: 20,
                  color: '#1B1918',
                  marginLeft: 30,
                  marginTop: 2,
                }}>
                Que bom ter você aqui!
              </Text>
              <Text
                style={{
                  fontFamily: 'Gudea',
                  fontWeight: 'bold',
                  fontSize: 15,
                  lineHeight: 20,
                  color: '#9B918C',
                  marginLeft: 30,
                  marginTop: 2
                }}>
                _______________________
              </Text>
              <Text
                style={{
                  fontFamily: 'Gudea',
                  fontWeight: 'bold',
                  fontSize: 15,
                  lineHeight: 20,
                  color: '#B5985A',
                  marginLeft: 30,
                  marginTop: 30
                }}>
                Com quais dos itens abaixo você mais se identifica?
              </Text>

              <View style={{ marginTop: 10 }}>
                {this.state.dados.map((item, i) => {
                  return (
                    <CheckBox
                      title={item.title}
                      checked={item.checked}
                      onPress={() => onSelect(i, item.title)}
                    />
                  );
                })}
              </View>

              <View style={{ marginTop: 20, marginRight: 15 }}>
                <Button
                  title="Continuar"
                  onPress={() => navigate('Realizando')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Questoes;
