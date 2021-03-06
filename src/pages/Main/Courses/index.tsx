import { inject, observer } from 'mobx-react';
import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import PageContainer from '../../../components/common/PageHeader/pageContainer';
import withHeaderRoom from '../../../components/header/HeaderRoom/decorator';
import { IGlobalStore } from '../../../stores/Global';

interface ICoursesProps extends RouteConfigComponentProps<{}> {
  $Global?: IGlobalStore;
}

@inject('$Global')
@withHeaderRoom<ICoursesProps>(() => '所有课程')
@observer
export default class Courses extends React.Component<ICoursesProps> {

  render() {
    const { route } = this.props;
    return (
      <PageContainer title={ '所有课程' }>
        { renderRoutes(route!.routes) }
      </PageContainer>
    );
  }
}
