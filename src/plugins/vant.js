import {
  Button,
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
} from 'vant'

const components = [
  Button,
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
]

export default (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
