import { Alert } from 'antd';
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message : '' , error:false };
  }

  static getDerivedStateFromError(error) {
      console.log('error1',error.message)
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return { error: true , message:error.message  };
  }

  componentDidCatch(error, errorInfo) {
      console.log('errror2',error,errorInfo)
    // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
  }

  render() {
    if (this.state.error) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return  <Alert message={this.state.message} style={
          {
              margin:'25px 50px'
          }
      } type="error" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;